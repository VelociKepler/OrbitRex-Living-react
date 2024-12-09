import { Card } from "react-bootstrap";
import Rating from "../Rating";
import { IProduct as ProductType } from "./Product.type";
import { Link } from "react-router-dom";

const Product = ({ product }: { product: ProductType }) => {
  return (
    <div>
      <Card>
        <Link to={`/products/${product._id}`}>
          <Card.Img variant="top" src={product.images[0]} />
        </Link>
        <Card.Body>
          <Link to={`/products/${product._id}`}>
            <Card.Title as="div" className="product-title">
              <strong>{product.name}</strong>
            </Card.Title>
          </Link>
          <Rating value={product.rating} text={`(${product.numReviews})`} />
          <Card.Text as="h2" className="text-2xl font-bold mt-2">฿{product.pricing}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Product;
