import React, { useEffect, useState } from "react";
import "./cart.css";
import CommonSection from "../../components/UI/commonsection/CommonSection";
import Helmet from "../../components/helmet/Helmet";
import { Col, Container, Row } from "reactstrap";
import tdImg from "../../assets/images/arm-chair-01.jpg";

import { cartActives } from "../../redux/slices/cartSlice";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

function Cart(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const cartItems = useSelector((state) => state.cart.cartItem);

  const [totalAmount, setTotalAmount] = useState();

  // const totalAmount = useSelector((state) => state.cart.totalAmount);

  useEffect(() => {
    window.scrollTo(0, 0);

    localStorage.setItem("cart", JSON.stringify(cartItems));
    setTotalAmount(
      cartItems.reduce(
        (acc, curr) => acc + Number(curr.price) * curr.quantity,
        0
      )
    );
  }, [cartItems]);
  /**
   * 
   * Redux Toolkit, một thư viện quản lý trạng thái phổ biến cho ứng dụng React.

    useSelector được sử dụng để truy xuất trạng thái từ Redux store trong các component React. Nó cho phép bạn chọn và lấy các giá trị từ store mà bạn quan tâm và sử dụng chúng trong component của mình.
   */
  return (
    <Helmet title="Cart">
      <CommonSection title="Shopping Cart" />
      <section className="pt-0" style={{ top: "10px" }}>
        <Container>
          <Row>
            <Col lg="9">
              {cartItems.length === 0 ? (
                <h2 className="text-center">No item added to the cart</h2>
              ) : (
                <table className="table bordered">
                  <thead>
                    <tr>
                      <th>Image</th>
                      <th>Title</th>
                      <th>Price</th>
                      <th>Qty</th>
                      <th>Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.map((item, index) => (
                      <Tr item={item} key={index}></Tr>
                    ))}
                  </tbody>
                </table>
              )}
            </Col>

            <Col lg="3" className="pt-2">
              <div>
                <h3
                  className="d-flex align-items-center"
                  style={{ fontSize: "25px" }}
                >
                  Subtotal
                </h3>
                <span className="cart__total">${totalAmount}</span>
              </div>
              <p>shipping will calculate in checkout</p>
              <Row>
                <Col>
                  <div>
                    <button className="buy__btn lg-7">
                      <Link to="/shop">Shopping</Link>
                    </button>
                  </div>
                </Col>

                <Col>
                  <div>
                    <button className="buy__btn">
                      <Link to="/checkout">Checkout</Link>
                    </button>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
}
const Tr = ({ item }) => {
  const dispatch = useDispatch();
  const deleteProduct = () => {
    dispatch(cartActives.deleteItem(item.id));
  };
  return (
    <tr>
      <td>
        <img src={item.imgUrl} />
      </td>
      <td>{item.productName}</td>
      <td>${item.price}</td>
      <td>{item.quantity} px</td>
      <td onClick={deleteProduct}>
        <i class="ri-delete-bin-line"></i>
      </td>
    </tr>
  );
};

export default Cart;
