import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Row, Col, ListGroup, Card, Button } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import products from "../../products.tsx";
import Navbar from "../../components/Navbar.tsx";
import Rating from "../../components/Rating.tsx";

// TypeScript interfaces for props
interface ProductActionsProps {
  price: string;
  colors: string[] | undefined;
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
  product: typeof products[0];
}

// Main ProductScreen Component
const ProductScreen: React.FC = () => {
  const { id: productId } = useParams<{ id: string }>();
  const product = products.find((product) => product._id === productId);

  // State
  const [activeImage, setActiveImage] = useState(product?.images?.[0] || "");
  const [activeColor, setActiveColor] = useState(
    product?.color ? Object.values(product.color)[0] : ""
  );
  const [cartCount, setCartCount] = useState(0);
  console.log(cartCount);
  // Guard Clause
  if (!product) return <div>Product not found</div>;

  // Format price
  const formattedPrice = product.pricing
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  // Event Handlers
  const handleAddToCart = () => {
    setCartCount((prevCount) => prevCount + 1);
    toast.success("Item added to cart!");
  };

  return (
    <>
      <Navbar />
      <div className = "max-w-screen-xl mx-auto mt-[96px]">
        {/* Back Link */}
        <Link
          className = "btn btn-light"
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

            {/* Actions (Add to Cart and Colors) */}
            <Col md = {3}>
              <ProductActions
                price = {formattedPrice}
                colors = {product.color}
                activeColor = {activeColor}
                onColorSelect = {setActiveColor}
                onAddToCart = {handleAddToCart}
              />
            </Col>
          </Row>
        </div>

        {/* Toast Container */}
        <ToastContainer
          position = "top-right"
          autoClose = {1000}
        />
      </div>
    </>
  );
};

export default ProductScreen;

/* --- Reusable Components --- */

// ImageGallery Component
const ImageGallery: React.FC<ImageGalleryProps> = ({
                                                     images,
                                                     activeImage,
                                                     onImageClick
                                                   }) => (
  <div
    className = "ecommerce-gallery"
    data-mdb-ecommerce-gallery-init
    data-mdb-zoom-effect = "true"
    data-mdb-auto-height = "true"
  >
    <div className = "row py-3 shadow-5">
      {/* Main Image */}
      <div className = "col-12 mb-1">
        <div
          className = "lightbox"
          data-mdb-lightbox-init
        >
          <img
            src = {`/${activeImage}`}
            alt = "Main Gallery Image"
            className = "ecommerce-gallery-main-img active w-100 rounded"
          />
        </div>
      </div>
      {/* Thumbnail Images */}
      {images.map((image, index) => (
        <div
          key = {index}
          className = "col-3 mt-1"
        >
          <img
            onClick = {() => onImageClick(image)}
            src = {`/${image}`}
            alt = {`Gallery image ${index + 1}`}
            className = {`w-100 cursor-pointer rounded ${
              activeImage === image ? "border-2 border-orange-500" : ""
            }`}
          />
        </div>
      ))}
    </div>
  </div>
);

// ProductDetails Component
const ProductDetails: React.FC<ProductDetailsProps> = ({ product }) => (
  <ListGroup variant = "flush">
    {/* Name and Description */}
    <ListGroup.Item>
      <h3 className = "text-2xl text-[#1D1F26]">{product.name}</h3>
      <p>{product.description}</p>
    </ListGroup.Item>

    {/* Rating */}
    <ListGroup.Item>
      <Rating
        value = {product.rating}
        text = {`${product.numReviews} reviews`}
      />
    </ListGroup.Item>

    {/* Dimensions */}
    <ListGroup.Item>
      <Card.Title className = "mb-2">Size</Card.Title>
      {Object.entries(product.metadata.dimensions).map(([key, value]) => (
        <p
          key = {key}
          className = "text-[#1D1F26]"
        >{`${capitalize(
          key
        )}: ${value} cm`}</p>
      ))}
    </ListGroup.Item>
  </ListGroup>
);

// ProductActions Component
const ProductActions: React.FC<ProductActionsProps> = ({
                                                         price,
                                                         colors,
                                                         activeColor,
                                                         onColorSelect,
                                                         onAddToCart
                                                       }) => (
  <Card>
    <ListGroup variant = "flush">
      {/* Price */}
      <ListGroup.Item>
        <Row>
          <Col>Price:</Col>
          <Col>
            <strong>{price} Bath</strong>
          </Col>
        </Row>
      </ListGroup.Item>

      {/* Color Selector */}
      {colors && (
        <ListGroup.Item>
          <Card.Subtitle>Color</Card.Subtitle>
          <Card.Title className = "mb-2">Available Colors</Card.Title>
          <div className = "flex gap-2">
            {Object.entries(colors).map(([key, value]) => (
              <div
                key = {key}
                onClick = {() => onColorSelect(value)}
                className = {`w-8 h-8 rounded-full cursor-pointer border-2 ${
                  activeColor === value
                    ? "border-orange-500"
                    : "border-gray-200"
                }`}
                style = {{ backgroundColor: value }}
              />
            ))}
          </div>
        </ListGroup.Item>
      )}

      {/* Add to Cart Button */}
      <ListGroup.Item>
        <Button
          className = "btn-block"
          type = "button"
          onClick = {onAddToCart}
        >
          Add to Cart
        </Button>
      </ListGroup.Item>
    </ListGroup>
  </Card>
);

/* --- Utility Functions --- */
const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);