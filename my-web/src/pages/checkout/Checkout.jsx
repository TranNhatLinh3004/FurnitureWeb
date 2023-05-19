import React from "react";
import Helmet from "../../components/helmet/Helmet";
import CommonSection from "../../components/UI/commonsection/CommonSection";
import { Col, FormGroup, Form, Container, Row } from "reactstrap";
import "./checkout.css";
import { useSelector, useDispatch } from "react-redux";

function Checkout(props) {
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  return (
    <Helmet title="Checkout">
      <CommonSection title="Checkout" />
      <section className="checkout__cart">
        <Container>
          <Row>
            <Col lg="8">
              <h6 className="mb-4 fw-bold">Billing Information</h6>
              <Form className="form__group">
                <FormGroup>
                  <input type="text" placeholder="Enter your name" />
                </FormGroup>

                <FormGroup>
                  <input type="text" placeholder="Enter your email" />
                </FormGroup>

                <FormGroup>
                  <input type="text" placeholder="Phone number" />
                </FormGroup>

                <FormGroup>
                  <input type="text" placeholder="Street Address" />
                </FormGroup>
                <FormGroup>
                  <input type="text" placeholder="Postal code" />
                </FormGroup>
              </Form>
            </Col>

            <Col lg="4">
              <div className="checkout__cart1">
                <h6>
                  Total Qty:{" "}
                  <span>
                    {totalQuantity > 1
                      ? `${totalQuantity} items`
                      : `${totalQuantity} item`}
                  </span>
                </h6>

                <h6>
                  Subtotal: <span>${totalAmount}</span>
                </h6>
                <h6>
                  Shipping: <span>$0</span>
                </h6>
                <h6>Free Shipping</h6>
                <hr />
                <h4>
                  Total Cost: <span>${totalAmount}</span>
                </h4>
              </div>
              <button className="buy__btn auth__btn w-100">
                Place an order
              </button>
            </Col>
          </Row>
          
        </Container>
      </section>
    </Helmet>
  );
}

export default Checkout;
