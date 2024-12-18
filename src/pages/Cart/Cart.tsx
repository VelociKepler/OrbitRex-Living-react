import Navbar from "../../components/Navbar";
import { ShopContext, ShopContextType } from "../../contexts/ShopContext";
import { useContext, useEffect, useState, useCallback } from "react";
import { fetchProducts } from "../../services/productService";
import { toast } from "react-toastify";
import { IProduct, ICartItem } from "../../components/products/Product.type";
import { backendUrl } from "../../App";
import { IoIosCloseCircle } from "react-icons/io";
import { FiMinusCircle, FiPlusCircle } from "react-icons/fi";
import { Link } from "react-router-dom";

// Define Props for the CartItem component
interface CartItemProps {
  item: IProduct;
  cartData?: ICartItem;
  updateCartItem: (id: string, data: Partial<ICartItem>) => void;
  removeCartItem: (id: string) => void;
}

const Cart = () => {
  const [products, setProducts] = useState<IProduct[]>([]); // Stores the list of products
  const [matchedItems, setMatchedItems] = useState<IProduct[]>([]); // Matched products in cart

  // Attach to ShopContext
  const useShopContext = (): ShopContextType => {
    const context = useContext(ShopContext);
    if (!context) {
      throw new Error("useShopContext must be used within a ShopContextProvider");
    }
    return context;
  };

  const { cartItem, updateCartItem, removeCartItem } = useShopContext();

  // Fetch products (memoized to prevent unnecessary re-fetches)
  const fetchData = useCallback(async () => {
    try {
      const productList = await fetchProducts(backendUrl);
      setProducts(productList);
    } catch (error: unknown) {
      toast.error("Failed to load products.");
      if (error instanceof Error) {
        console.error("Product Fetch Error:", error.message);
      } else {
        console.error("Unknown error occurred while fetching products.");
      }
    }
  }, []);

  // Fetch products only once on component mount
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  // Match cart items with products and update matchedItems
  useEffect(() => {
    if (cartItem.length === 0) {
      setMatchedItems([]);
      return;
    }

    if (products.length > 0) {
      const matchingProducts = cartItem
        .map((item) => products.find((product) => product._id.toString() === item.id))
        .filter((match): match is IProduct => match !== undefined); // Filter out undefined matches

      setMatchedItems(matchingProducts);
    }
  }, [cartItem, products]);

  // Calculate Total Price
// Calculate Total Price (now summing up VAT and subtotal at the end of the component)

  // CartItem Component
  const CartItem: React.FC<CartItemProps> = ({ item, cartData, updateCartItem, removeCartItem }) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Handles dropdown visibility

    const handleColorSelect = (color: string) => {
      updateCartItem(item._id.toString(), { color });
      setIsDropdownOpen(false);
    };


    return (
      <div className = "relative w-full flex justify-between items-center gap-6 border rounded p-2">
        {/* Image Column */}
        <div className = "w-32 h-32 flex-shrink-0">
          <img
            src = {item.images[0]}
            alt = {item.name}
            className = "w-full h-full object-cover rounded"
          />
        </div>

        {/* Product Name Column */}
        <div className = "flex-1 text-center">
          <h2 className = "font-semibold text-lg">{item.name}</h2>
        </div>

        {/* Custom Color Dropdown */}
        <div className = "w-40 text-center flex flex-col items-center relative">
          <div
            onClick = {() => setIsDropdownOpen(!isDropdownOpen)}
            className = "border py-1 px-2 rounded cursor-pointer w-full text-left"
          >
            <div className = "flex items-center">
              <div
                className = "w-6 h-6 rounded-full border mr-2"
                style = {{ backgroundColor: cartData?.color || item.color[0] }}
              ></div>
              {cartData?.color || item.color[0]}
            </div>
          </div>
          {isDropdownOpen && (
            <div className = "absolute mt-1 border bg-white rounded shadow-md z-10 w-full">
              {item.color.map((color, index) => (
                <button
                  key = {index}
                  onClick = {() => handleColorSelect(color)}
                  className = "flex items-center w-full px-4 py-2 hover:bg-gray-100"
                >
                  <div
                    className = "w-6 h-6 rounded-full border mr-3"
                    style = {{ backgroundColor: color }}
                  ></div>
                  {color}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Quantity Column */}
        <div className = "w-36 flex justify-center items-center gap-2">
          <button
            onClick = {() => {
              if (cartData?.quantity && cartData.quantity > 1) {
                updateCartItem(item._id.toString(), { quantity: cartData.quantity - 1 });
              }
            }}
            className = ""
          >
            <FiMinusCircle
              size = {24}
              className = "text-gray-500 hover:text-gray-700"
            />
          </button>
          <input
            type = "number"
            value = {cartData?.quantity || 1}
            min = "1"
            onChange = {(e) => {
              const newQuantity = parseInt(e.target.value, 10);
              if (newQuantity > 0) {
                updateCartItem(item._id.toString(), { quantity: newQuantity });
              }
            }}
            className = "w-12 border text-center rounded"
          />
          <button
            onClick = {() =>
              updateCartItem(item._id.toString(), { quantity: (cartData?.quantity || 1) + 1 })
            }
          >
            <FiPlusCircle
              size = {24}
              className = "text-gray-500 hover:text-gray-700"
            />
          </button>
        </div>

        {/* Price + Remove Button */}
        <div className = "w-40 flex flex-col items-center gap-2 text-center">
          <p className = "font-semibold">
            ${((item.pricing || 0) * (cartData?.quantity || 1)).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
          </p>
        </div>
        <button
          onClick = {() => removeCartItem(item._id.toString())}
          className = "absolute top-3 right-3"
        >
          <IoIosCloseCircle
            size = {26}
            className = "text-red-500 hover:text-red-600"
          />
        </button>
      </div>
    );
  };

  // Define VAT rate (e.g., 20%)
  const VAT_RATE = 0.15;

// Calculate Subtotal (sum of all items' prices without VAT)
  const subtotal = cartItem
    .reduce((total, item) => {
      const product = products.find((product) => product._id.toString() === item.id);
      return total + (product?.pricing || 0) * item.quantity;
    }, 0)
    .toFixed(2);

// Calculate VAT amount
  const vatAmount = (parseFloat(subtotal) * VAT_RATE).toFixed(2);

// Calculate total price
  const totalPrice = (parseFloat(subtotal) + parseFloat(vatAmount)).toFixed(2);

  return (
    <div>
      <Navbar />
      <div className = "mt-[100px] max-w-screen-lg mx-auto">
        <h1 className = "text-xl font-bold">Cart</h1>
        <p className = "my-4 font-medium">Total Items: {cartItem.length}</p>

        <div className = "flex flex-col gap-8 items-center">
          {matchedItems.length === 0 ? (
            // Render a message if the cart is empty
            <div className = "text-center my-10">
              <h2 className = "text-lg font-semibold text-gray-600">Please add products to your cart</h2>
              <Link
                to = "/products"
                className = "text-blue-600 hover:underline"
              >
                Go to Products
              </Link>
            </div>
          ) : (
            // Render the cart items if present
            matchedItems.map((item) => {
              const cartData = cartItem.find((cart) => cart.id === item._id.toString());
              return (
                <CartItem
                  key = {item._id}
                  item = {item}
                  cartData = {cartData}
                  updateCartItem = {updateCartItem}
                  removeCartItem = {removeCartItem}
                />
              );
            })
          )}

          {matchedItems.length > 0 && (
            // Render Total Price and Checkout Button only if items exist
            <div className = "mt-8 w-full flex flex-col justify-end items-end">
              <h1 className = "text-xl font-medium text-end">Subtotal:
                ${subtotal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h1>
              <h1 className = "text-xl font-medium text-end">VAT (${VAT_RATE * 100}%):
                ${vatAmount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h1>
              <h1 className = "text-2xl font-bold text-end">Total price:
                ${totalPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h1>
              <Link
                to = "/checkout"
                className = "flex items-center justify-center"
              >
                <button
                  type = "button"
                  className = "text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-28 py-2.5 text-center mt-4 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Check out
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;