import React, { useEffect, useRef } from "react";
import "./header.css";
import { Container, Row } from "reactstrap";
// import logo from "../../assets/images/eco-logo.png";
import { motion } from "framer-motion";

import { Link, NavLink, useNavigate } from "react-router-dom";
import userIcon from "../../assets/images/user-icon.png";
import { useSelector } from "react-redux";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase.config";
import useAuth from "../../custom-hooks/useAuth";
import { toast } from "react-toastify";
const nav__links = [
  {
    path: "home",
    display: "Home",
  },
  {
    path: "shop",
    display: "Shop",
  },
  {
    path: "cart",
    display: "Cart",
  },
];
function Header(props) {
  // const headerRef = useRef(null);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  // const menuRef = useRef(null);
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  const profileActionRef = useRef("show__profileActions");
  // const menuToggle = () => {
  //   menuRef.current.classList.toggle("active__menu");
  // };

  useEffect(() => {
    localStorage.setItem("totalQuantity", JSON.stringify(totalQuantity));
  }, [totalQuantity]);

  const navigateToCart = () => {
    navigate("/cart");
  };
  // const navigateToLogin = () => {
  //   navigate("/login");
  // };
  const logout = () => {
    signOut(auth)
      .then(() => {
        toast.success("Logged out");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };
  const toggleProfileActions = () =>
    profileActionRef.current.classList.toggle("show__profileActions");
  return (
    <header className="header">
      <Container>
        <Row>
          <div className="nav__wrapper">
            <div className="logo">
              {/* <img src={logo} alt="" /> */}
              <i class="uil uil-adobe"></i>
              <div className="">
                <h1>Perfect Home</h1>
                {/* <p>Since 1989</p> */}
              </div>
            </div>
            <div className="navigation">
              <ul className="menu">
                {nav__links.map((item, index) => {
                  return (
                    <li className="nav__item" key={index}>
                      <NavLink
                        to={item.path}
                        className={(navClass) =>
                          navClass.isActive ? "nav__active" : ""
                        }
                      >
                        {item.display}{" "}
                      </NavLink>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="nav__icons">
              <span className="fav__icon">
                <i class="ri-heart-line"></i>
                <span className="badge"> 0</span>
              </span>
              <span className="cart__icon" onClick={navigateToCart}>
                <i class="ri-shopping-bag-line"></i>
                <span className="badge">{totalQuantity}</span>
              </span>
              <div className="profile">
                <motion.img
                  whileTap={{ scale: 1.2 }}
                  src={currentUser ? currentUser.photoURL : userIcon}
                  alt=""
                  onClick={toggleProfileActions}
                  // ref={profileActionRef}
                />
                <div
                  className="profile__actions"
                  ref={profileActionRef}
                  onClick={toggleProfileActions}
                >
                  {currentUser ? (
                    <span onClick={logout}>Logout</span>
                  ) : (
                    <div>
                      <span style={{ marginRight: "10px" }}>
                        <Link to="/login">Login</Link>
                      </span>

                      <Link to="/register">Register</Link>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="mobile__menu">
              <span>
                <i class="ri-menu-line"></i>
              </span>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  );
}

export default Header;
