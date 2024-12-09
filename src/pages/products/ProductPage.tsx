import { Col, Row } from "react-bootstrap";
import Product from "../../components/products/Product.tsx";
import products from "../../products.tsx"; // Ensure products have 'id' property
import Navbar from "../../components/Navbar";
import "../../../src/assets/styles/index.css";
import "../../../src/assets/styles/bootstrap.custom.css";
import { useState } from "react";

const ProductPage = () => {
  const [imageLoaded, setImageLoaded] = useState<boolean[]>([]);

  const handleImageLoad = (index: number) => {
    setImageLoaded((prevState) => {
      const updatedState = [...prevState];
      updatedState[index] = true;
      return updatedState;
    })
  }
  return (
    <div>
      <Navbar />
      <div className = "m-5">
        <h1>Latest Products</h1>
        <Row className = "g-4 max-width-lg">
          {products.map((product: any, index: number) => (
            <Col
              key = {product._id}
              sm = {12}
              md = {6}
              lg = {4}
              xl = {3}
            >
              <Product product = {product} />
              <img
                src = {product.imageUrl} // Assuming the product has an imageUrl property
                alt = {product.name}
                style = {{ display: "none" }} // Hide image initially
                onLoad = {() => handleImageLoad(index)} // Set image loaded on load
              />
              {/* Render the Product component once image is loaded */}
              {imageLoaded[index] && <Product product = {product} />}
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default ProductPage;
