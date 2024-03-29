import React, { useState, useRef, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./productdetails.css";
import products from "../../assets/data/products";
import Helmet from "../../components/helmet/Helmet";
import CommonSection from "../../components/UI/commonsection/CommonSection";
import { Container, Row, Col } from "reactstrap";
import ProductsList from "../../components/UI/productslist/ProductsList";
import { ToastContainer, toast } from "react-toastify";

import { useDispatch } from "react-redux";
import { cartActives } from "../../redux/slices/cartSlice";
function ProductDetails(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [tab, setTab] = useState("desc");
  const [rating, setRating] = useState(null);

  const reviewUser = useRef(null);
  const reviewMsg = useRef("");
  const dispatch = useDispatch();
  const { id } = useParams();
  const product = products.find((product) => product.id === id);

  console.log(product);

  const {
    imgUrl,
    productName,
    description,
    price,
    avgRating,
    shortDesc,
    reviews,
    category,
    src,
  } = product;

  const relatedProducts = products.filter((item) => item.category === category);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    {
      setQuantity(1);
    }
  }, [product]);

  const handleQuantityChange = (event) => {
    const value = parseInt(event.target.value, 10);
    setQuantity(isNaN(value) ? 1 : value);
  };

  const increaseQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decreaseQuantity = () => {
    setQuantity((prevQuantity) => Math.max(prevQuantity - 1, 1));
  };

  const submitHandle = (e) => {
    e.preventDefault();

    const reviewUserValue = reviewUser.current.value;
    const reviewMsgValue = reviewMsg.current.value;

    const reviewObj = {
      userName: reviewUserValue,
      text: reviewMsgValue,
      rating,
    };

    toast.success("Review submited");
    console.log(reviewUserValue, reviewMsgValue, rating);
  };
  const addToCart = () => {
    dispatch(
      cartActives.addItem({
        id,
        productName,
        imgUrl,
        price,
        quantity,
      })
    );
    toast.success("Item added to cart");

    // alert(props.item.id);
  };

  const [currentImage, setCurrentImage] = useState(imgUrl);
  const [activeThumbIndex, setActiveThumbIndex] = useState(0);

  const handleThumbHover = (image, index) => {
    setCurrentImage(image);
    setActiveThumbIndex(index);
  };

  useEffect(() => {
    setCurrentImage(imgUrl);

    setActiveThumbIndex(0);
  }, [id]);
  return (
    <Helmet title={productName}>
      <CommonSection title={productName} />
      <section className="pt-0" style={{ top: "-10px" }}>
        <Container>
          <Row>
            <Col lg="6">
              <img src={currentImage} />
            </Col>
            <Col lg="6">
              <div className="product__details">
                <h2>{productName}</h2>
                <div className="product__rating d-flex align-items-center gap-5 ">
                  <div>
                    <span>
                      <i class="ri-star-fill"></i>
                    </span>
                    <span>
                      <i class="ri-star-fill"></i>
                    </span>
                    <span>
                      <i class="ri-star- ill"></i>
                    </span>
                    <span>
                      <i class="ri-star-fill"></i>
                    </span>
                    <span>
                      <i class="ri-star-half-s-line"></i>
                    </span>
                  </div>
                  <p>
                    (<span>{avgRating}</span> ratings)
                  </p>
                </div>
                <div className="d-flex align-items-center gap-5">
                  <span className="product__price">${price}</span>
                  <span className="category">
                    Category: {category.toUpperCase()}
                  </span>
                </div>
                <p className="mt-2">{shortDesc}</p>
                {/*  */}
                <div className="quantity-container">
                  <button className="quantity-btn" onClick={decreaseQuantity}>
                    -
                  </button>
                  <input
                    type="number"
                    value={quantity}
                    onChange={handleQuantityChange}
                  />
                  <button className="quantity-btn" onClick={increaseQuantity}>
                    +
                  </button>
                </div>

                {/*  */}
                <button className="buy__btn" onClick={addToCart}>
                  Add to cart
                </button>
              </div>
            </Col>
          </Row>
          <div className="thumb">
            {src.map((image, index) => {
              return (
                <img
                  key={index}
                  src={image}
                  onMouseEnter={() => handleThumbHover(image, index)}
                  className={`thumb ${
                    index === activeThumbIndex ? "active" : ""
                  }`}
                />
              );
            })}
          </div>
        </Container>
      </section>

      <section className="desc__reviews">
        <Container>
          <Row>
            <Col lg="12">
              <div className="tab__wrapper d-flex align-items-center gap-5">
                <h5
                  className={`${tab === "desc" ? "active__tab" : ""}`}
                  onClick={() => setTab("desc")}
                >
                  Description
                </h5>
                <h6
                  className={`${tab === "rev" ? "active__tab" : ""}`}
                  onClick={() => setTab("rev")}
                >
                  Reviews ({reviews.length})
                </h6>
              </div>
              {tab === "desc" ? (
                <div className="tab__content mt-4">
                  <p>{description}</p>
                </div>
              ) : (
                <div className="product__review">
                  <div className="reviews__wrapper">
                    <ul>
                      {reviews?.map((item, index) => (
                        <li key={index} className="mt-4">
                          <h6>John</h6>

                          <span>{item.rating} ( rating)</span>
                          <p>{item.text}</p>
                        </li>
                      ))}
                    </ul>

                    <div className="review__form">
                      <h4>Leave your experience</h4>
                      <form
                        action="
                      "
                        onSubmit={submitHandle}
                      >
                        <div className="form__group">
                          <input
                            type="text"
                            placeholder="Enter your name"
                            ref={reviewUser}
                            required
                          />
                        </div>
                        <div className="form__group rating__group">
                          <span
                            onClick={() => {
                              setRating(1);
                            }}
                          >
                            1<i class="ri-star-fill"></i>
                          </span>
                          <span
                            onClick={() => {
                              setRating(2);
                            }}
                          >
                            2<i class="ri-star-fill"></i>
                          </span>
                          <span
                            onClick={() => {
                              setRating(3);
                            }}
                          >
                            3<i class="ri-star-fill"></i>
                          </span>
                          <span
                            onClick={() => {
                              setRating(4);
                            }}
                          >
                            4<i class="ri-star-fill"></i>
                          </span>
                          <span
                            onClick={() => {
                              setRating(5);
                            }}
                          >
                            5<i class="ri-star-fill"></i>
                          </span>
                        </div>
                        <div className="form__group">
                          <textarea
                            role={4}
                            type="text"
                            placeholder="Enter message..."
                            ref={reviewMsg}
                            required
                          />
                        </div>
                        <button
                          type="submit"
                          className="buy__btn"
                          onClick={submitHandle}
                        >
                          Submit
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              )}
            </Col>
            <Col lg="12" className="mt-4">
              <h2
                className="related__title "
                style={{
                  marginLeft: "550px",
                  fontSize: "22px",
                }}
              >
                You might also like
              </h2>
              <Row className="mt-4 list__products">
                <ProductsList data={relatedProducts}></ProductsList>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
}

export default ProductDetails;
