import { useParams } from "react-router-dom";
import products from "../../products.tsx";
import { Link } from "react-router-dom";
import { Row, Col, ListGroup, Card } from "react-bootstrap";
import Rating from "../../components/Rating.tsx";
import { useState } from "react";
import { Button } from "react-bootstrap";
import Navbar from "../../components/Navbar.tsx"

const ProductScreen = () => {
    const { id: productId } = useParams();
    const product = products.find((product) => product._id === productId);
    // @ts-expect-error product should pass through props
    const [activeImage, setActiveImage] = useState(product.images[0]);
    const [cartItemsCount, setCartItemsCount] = useState(0);
    if (!product) return <div>Product not found</div>; // Guard clause in case the product is not found


    return (
      <>
            <Navbar/>
      <div className="max-w-7xl mx-auto mt-4">
          <Link className="btn btn-light" to={`/products`}>
              Go Back
          </Link>
          <div className="mt-4">
              <Row>
                  <Col md={5}>
                      {/* Dynamic image gallery */}
                      <div className="ecommerce-gallery" data-mdb-ecommerce-gallery-init data-mdb-zoom-effect="true" data-mdb-auto-height="true">
                          <div className="row py-3 shadow-5">
                              <div className="col-12 mb-1">
                                  <div className="lightbox" data-mdb-lightbox-init>
                                      <img
                                        src={`/${activeImage}`}
                                        alt="Main Gallery Image"
                                        className="ecommerce-gallery-main-img active w-100"
                                      />
                                  </div>
                              </div>
                              {product.images.map((image, index) => (
                                <div className="col-3 mt-1" key={index}>
                                    <img
                                      onClick={() => setActiveImage(image)}
                                      src={`/${image}`}
                                      alt={`Gallery image ${index + 1}`}
                                      className="w-100 cursor-pointer"
                                      data-mdb-img={`/${image}`}
                                    />
                                </div>
                              ))}
                          </div>
                      </div>
                  </Col>
                  <Col md={4}>
                      <ListGroup variant="flush">
                          <ListGroup.Item>
                              <h3>{product.name}</h3>
                          </ListGroup.Item>
                          <ListGroup.Item>
                              <Rating value={product.rating} text={`${product.numReviews} reviews`} />
                          </ListGroup.Item>
                          <ListGroup.Item>
                              Price: ${product.pricing}
                          </ListGroup.Item>
                      </ListGroup>
                  </Col>
                  <Col md={3}>
                      <Card>
                          <ListGroup variant="flush">
                              <ListGroup.Item>
                                  <Row>
                                      <Col>
                                          Price:
                                      </Col>
                                      <Col>
                                          <strong>${product.pricing}</strong>
                                      </Col>
                                  </Row>
                              </ListGroup.Item>
                              <ListGroup.Item>
                                  <Button
                                    className="btn-block"
                                    type="button"
                                    onClick={() => setCartItemsCount(cartItemsCount + 1)}
                                  >
                                    Add to Cart
                                  </Button>
                              </ListGroup.Item>
                          </ListGroup>
                      </Card>
                  </Col>
              </Row>
          </div>
      </div>
      </>
    );
};

export default ProductScreen;
