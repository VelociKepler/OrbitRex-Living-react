import { Card } from "react-bootstrap";
import Rating from "../Rating";
import { IProduct } from "./Product.type";
import { Link } from "react-router-dom";
import { IoPricetags } from "react-icons/io5";


const Product = ({ product }: { product: IProduct }) => {
  return (
    <div>
      <Card>
        <Link to = {`/products/${product._id}`}>
          <Card.Img
            variant = "top"
            src = {product.images[0]}
          />
        </Link>
        <Card.Body>
          <Link to = {`/products/${product._id}`}>
            <Card.Title
              as = "div"
              className = "product-title text-xl"
            >
              <strong>{product.name}</strong>
            </Card.Title>
          </Link>
          <Rating
            value = {product.rating}
            text = {`(${product.numReviews})`}
          />
          <Card.Text
            as = "h2"
            className = "text-2xl font-bold mt-2 italic"
          >${product.pricing.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Card.Text>
          <Card.Text
            className = "text-sm mt-2 flex items-center"
          >
            <IoPricetags color = "#A6A6A6" />
            <span className = "mx-1">{product.category}</span>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Product;
