import { Col, Row } from "react-bootstrap";
import Product from "../../components/products/Product.tsx";
import products from "../../products.tsx"; // Ensure products have 'id' property
import Navbar from "../../components/Navbar";
import "../../../src/assets/styles/index.css";
import "../../../src/assets/styles/bootstrap.custom.css";

const ProductPage = () => {
  // @ts-ignore
  return (
    <div>
      <Navbar />
      <div className="m-5">
        <h1>Latest Products</h1>
        <Row className="g-4 max-width-lg">
          {products.map((product: any) => (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default ProductPage;
