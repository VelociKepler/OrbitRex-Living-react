import { Card } from "react-bootstrap";
import Rating from "../Rating";
import { Product as ProductType } from "./Product.type";

const Product = ({ product }: { product: ProductType }) => {
  return (
    <div>
      <Card>
        <Card.Img variant="top" src={product.imageThumbnail} />
        <Card.Body>
          <Card.Title as="div" className="product-title">
            <strong>{product.name}</strong>
          </Card.Title>
          <Rating value={product.rating} text={`(${product.numReviews})`} />
          <Card.Text as="h3">฿{product.price}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Product;
