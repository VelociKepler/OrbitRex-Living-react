import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Row, Col, ListGroup, Card, Button } from "react-bootstrap";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "../../components/Navbar";
import Rating from "../../components/Rating";
import { IProduct } from "../../components/products/Product.type";
import { fetchProducts } from "../../services/productService"; // Extracted API service
import { capitalize, formatPrice } from "../../utils/helpers"; // Utility functions
import { backendUrl } from "../../App.tsx";
import { ShopContext, ShopContextType } from "../../contexts/ShopContext.tsx";

// TypeScript Props
interface ProductActionsProps {
  price: string;
  colors?: string[];
  activeColor: string;
  onColorSelect: (color: string) => void;
  onAddToCart: () => void;
}

interface ImageGalleryProps {
  images: string[];
  activeImage: string;
  onImageClick: (image: string) => void;
}

interface ProductDetailsProps {
  product: IProduct;
}

const ProductScreen: React.FC = () => {
  const { id: productId } = useParams<{ id: string }>();

  const useShopContext = (): ShopContextType => {
    const context = useContext(ShopContext);
    if (!context) {
      throw new Error("useShopContext must be used within a ShopContextProvider");
    }
    return context;
  };

  const { setCartCount, setCartItem } = useShopContext();

  // State
  const [products, setProducts] = useState<IProduct[]>([]);
  const [activeImage, setActiveImage] = useState<string>("");
  const [activeColor, setActiveColor] = useState<string>("");

  // Fetch product data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const productList = await fetchProducts(backendUrl);
        setProducts(productList);
      } catch (error: any) {
        toast.error("Failed to load products.");
        console.error(error.message);
      }
    };
    fetchData();
  }, []);

  // Find Current Product
  const product = products.find((p) => p._id.toString() === productId);

  // Initialize active image and color
  useEffect(() => {
    if (product) {
      setActiveImage(product.images?.[0] || "");
      setActiveColor(product.color ? Object.values(product.color)[0] : "");
    }
  }, [product]);

  // Return early if product is not found
  if (!product) return <div>Product not found</div>;

  // Modified handleAddToCart
  const handleAddToCart = () => {
    if (!productId) return;

    // Update the cart items
    setCartItem((prevItems) => {
      const existingItem = prevItems.find(
        (item) => item.id === productId && item.color === activeColor
      );

      // If an item with the same ID and color already exists, keep the cart unchanged
      if (existingItem) {
        toast.info("This item is already in your cart!");
        return prevItems;
      }

      // If the product is not found in the cart, add it as a new item
      const updatedItems = [
        ...prevItems,
        { id: productId, color: activeColor, quantity: 1 }
      ];

      // Increment the cart count only if a new item is added
      setCartCount((prevCount) => prevCount + 1);

      // Show a success message
      toast.success("Item added to cart!");

      return updatedItems;
    });
  };

  return (
    <div className = "h-screen">
      <Navbar />
      <div className = "container mt-[80px] max-w-screen-lg">
        <Link
          className = "btn btn-light mt-4 mb-2"
          to = "/products"
        >
          Go Back
        </Link>

        <div className = "mt-2">
          <Row>
            {/* Image Gallery */}
            <Col md = {4}>
              <ImageGallery
                images = {product.images}
                activeImage = {activeImage}
                onImageClick = {setActiveImage}
              />
            </Col>

            {/* Product Details */}
            <Col md = {4}>
              <ProductDetails product = {product} />
            </Col>

            {/* Product Actions */}
            <Col md = {3}>
              <ProductActions
                price = {formatPrice(product.pricing)}
                colors = {product.color}
                activeColor = {activeColor}
                onColorSelect = {setActiveColor}
                onAddToCart = {handleAddToCart}
              />
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default ProductScreen;

// Reusable Image Gallery Component
const ImageGallery: React.FC<ImageGalleryProps> = ({ images, activeImage, onImageClick }) => (
  <div>
    <div className = "main-image mb-3">
      <img
        src = {`${activeImage}`}
        alt = "Main Gallery Image"
        className = "w-100 rounded border-2 border-gray-100"
      />
    </div>
    <div className = "grid grid-cols-4 gap-1">
      {images.map((image, index) => (
        <img
          key = {index}
          onClick = {() => onImageClick(image)}
          src = {`${image}`}
          alt = {`Gallery image ${index + 1}`}
          className = {`thumbnail rounded border-2 border-gray-50 ${
            activeImage === image ? "active border-orange-500" : ""
          }`}
        />
      ))}
    </div>
  </div>
);

// Reusable Product Details Component
const ProductDetails: React.FC<ProductDetailsProps> = ({ product }) => (
  <ListGroup variant = "flush">
    <ListGroup.Item>
      <h3 className = "text-2xl text-black font-bold mb-2">{product.name}</h3>
      <p>{product.description}</p>
    </ListGroup.Item>
    <ListGroup.Item>
      <Rating
        value = {product.rating}
        text = {`${product.numReviews} reviews`}
      />
    </ListGroup.Item>
    <ListGroup.Item>
      <Card.Title>Dimensions</Card.Title>
      {Object.entries(product.metadata?.dimensions || {}).map(([key, value]) => (
        <p key = {key}>{`${capitalize(key)}: ${value} cm`}</p>
      ))}
    </ListGroup.Item>
  </ListGroup>
);

// Reusable Product Actions Component
const ProductActions: React.FC<ProductActionsProps> = ({
                                                         price,
                                                         colors,
                                                         activeColor,
                                                         onColorSelect,
                                                         onAddToCart
                                                       }) => (
  <Card>
    <ListGroup variant = "flush">
      <ListGroup.Item>
        <Row>
          <Col>Price:</Col>
          <Col>
            <strong>{price} Baht</strong>
          </Col>
        </Row>
      </ListGroup.Item>
      {colors && (
        <ListGroup.Item>
          <Card.Subtitle>Available Colors</Card.Subtitle>
          <div className = "color-selector">
            {Object.entries(colors).map(([key, value]) => (
              <div
                key = {key}
                onClick = {() => onColorSelect(value)}
                className = {`color-selection ${
                  activeColor === value ? "active" : ""
                }`}
                style = {{ backgroundColor: value }}
              />
            ))}
          </div>
        </ListGroup.Item>
      )}
      <ListGroup.Item>
        <Button
          className = "btn-block"
          onClick = {onAddToCart}
        >
          Add to Cart
        </Button>
      </ListGroup.Item>
    </ListGroup>
  </Card>
);