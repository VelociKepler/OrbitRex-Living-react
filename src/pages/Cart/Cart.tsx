import Navbar from "../../components/Navbar";
import { ShopContext, ShopContextType } from "../../contexts/ShopContext.tsx";
import { useContext, useEffect, useState, useCallback } from "react";
import { fetchProducts } from "../../services/productService.ts";
import { toast } from "react-toastify";
import { IProduct } from "../../components/products/Product.type";
import { backendUrl } from "../../App.tsx";

const Cart = () => {
  const [products, setProducts] = useState<IProduct[]>([]); // Stores list of products
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

  // Fetch products (memoized)
  const fetchData = useCallback(async () => {
    try {
      const productList = await fetchProducts(backendUrl);
      setProducts(productList);
    } catch (error: any) {
      toast.error("Failed to load products.");
      console.error("Product Fetch Error:", error.message);
    }
  }, [backendUrl]);

  // Fetch products only once on component mount
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  // Match cart items with products and update matchedItems
  useEffect(() => {
    // If cartItem is empty, clear matchedItems
    if (cartItem.length === 0) {
      setMatchedItems([]);
      return;
    }

    // Match items when cartItem and products are available
    if (products.length > 0) {
      const matchingProducts = cartItem
        .map((item) => products.find((product) => product._id.toString() === item.id))
        .filter((match) => match !== undefined) as IProduct[]; // Ensure type is correct

      setMatchedItems(matchingProducts); // Update matched items
    }
  }, [cartItem, products]); // Dependencies ensure this runs when cartItem or products change

  return (
    <div>
      <Navbar />
      <div className = "mt-[80px] max-w-screen-lg mx-auto">
        <h1 className = "text-xl font-bold">Cart</h1>
        <p className = "my-4 font-medium">Total Items: {cartItem.length}</p>

        {matchedItems.length > 0 ? (
          <div className = "border rounded-lg overflow-hidden">
            {matchedItems.map((item) => {
              // Get cart data for the current product
              const cartData = cartItem.find((cart) => cart.id === item._id.toString());

              return (
                <div
                  key = {item._id}
                  className = "flex items-center justify-between border-b p-4"
                >
                  {/* Image Column */}
                  <div className = "w-32 h-32">
                    <img
                      src = {item.images[0]}
                      alt = {item.name}
                      className = "w-full h-full object-cover rounded"
                    />
                  </div>

                  {/* Product Name Column */}
                  <div className = "flex-1 pl-4">
                    <h2 className = "font-semibold text-lg">{item.name}</h2>
                  </div>

                  {/* Color Column */}
                  <div className = "w-48 text-center flex">
                    <select
                      value = {cartData?.color || item.color[0]} // Default to first color
                      onChange = {(e) => {
                        const selectedColor = e.target.value;
                        updateCartItem(item._id.toString(), { color: selectedColor }); // Update selected color
                      }}
                      className = "border px-2 py-1 rounded"
                    >
                      {item.color.map((color, index) => (
                        <option
                          key = {index}
                          value = {color}
                        >
                          {color}
                        </option>
                      ))}
                    </select>
                    <div
                      className = "w-6 h-6 mx-auto mt-2 rounded-full"
                      style = {{ backgroundColor: cartData?.color || item.color[0] }}
                    ></div>
                  </div>

                  {/* Quantity Column */}
                  <div className = "w-24 text-center flex items-center space-x-2">
                    <button
                      onClick = {() => {
                        if (cartData && cartData.quantity > 1) {
                          updateCartItem(item._id.toString(), { quantity: cartData.quantity - 1 });
                        }
                      }}
                      className = "bg-gray-200 hover:bg-gray-300 px-2 py-1 rounded"
                    >
                      -
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
                      className = "w-10 border text-center rounded"
                    />
                    <button
                      onClick = {() => {
                        updateCartItem(item._id.toString(), { quantity: cartData.quantity + 1 });
                      }}
                      className = "bg-gray-200 hover:bg-gray-300 px-2 py-1 rounded"
                    >
                      +
                    </button>
                  </div>

                  {/* Price Column + Remove Button */}
                  <div className = "w-24 text-right flex flex-col items-end">
                    <p className = "font-semibold mb-2">
                      ${((item.pricing || 0) * (cartData?.quantity || 1)).toFixed(2)}
                    </p>
                    <button
                      onClick = {() => removeCartItem(item._id.toString())}
                      className = "bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <p className = "text-center text-gray-500">No items in the cart yet.</p>
        )}
      </div>
    </div>
  );
};

export default Cart;