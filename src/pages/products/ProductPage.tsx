import { Col, Row } from "react-bootstrap";
import Product from "../../components/products/Product.tsx";
import Navbar from "../../components/Navbar";
import "../../../src/assets/styles/index.css";
import "../../../src/assets/styles/bootstrap.custom.css";
import { useEffect, useState } from "react";
import { backendUrl } from "../../App.tsx";
import { toast } from "react-toastify";
import { IProduct } from "../../components/products/Product.type.ts";
import { fetchProducts } from "../../services/productService";

const ProductPage = () => {
  // const { backendUrl } = useContext(ShopContext) as ShopContextType;
  const [list, setList] = useState<IProduct[]>([]);


  const [imageLoaded, setImageLoaded] = useState<boolean[]>([]);


// Fetch product data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const productList = await fetchProducts(backendUrl);
        setList(productList);
      } catch (error: any) {
        toast.error("Failed to load products.");
        console.error(error.message);
      }
    };
    fetchData();
  }, [backendUrl]);

  // controlled image when loading
  const handleImageLoad = (index: number) => {
    setImageLoaded((prevState) => {
      const updatedState = [...prevState];
      updatedState[index] = true;
      return updatedState;
    });
  };


  return (
    <>
      <Navbar />
      <div className = "m-5 pt-10">
        <h1>Latest Products</h1>
        <Row className = "g-4 max-width-lg pt-10">
          {list.map((product: any, index: number) => (
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
    </>
  );
};

export default ProductPage;
