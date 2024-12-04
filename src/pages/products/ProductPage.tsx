import { Col, Row } from "react-bootstrap";
import Product from "../../components/products/Product.tsx";
import products from "../../products.tsx";
import Navbar from "../../components/Navbar";

const ProductPage = () => {
  return (
    <div>
      <Navbar />
      <div className="my-3">
        <h1>Latest Products</h1>
        <Row>
          {products.map((product) => (
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
