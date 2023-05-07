import React from "react";
import "./header.css";
import { Container, Row } from "reactstrap";
import logo from "../../assets/images/eco-logo.png";
import { motion } from "framer-motion";

import { NavLink } from "react-router-dom";
import userIcon from "../../assets/images/user-icon.png";
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
  return (
    <header className="header">
      <Container>
        <Row>
          <div className="nav__wrapper">
            <div className="logo">
              <img src={logo} alt="" />
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
                <span className="badge"> 1</span>
              </span>
              <span className="cart__icon">
                <i class="ri-shopping-bag-line"></i>
                <span className="badge"> 1</span>
              </span>
              <span>
                <motion.img whileTap={{ scale: 1.2 }} src={userIcon} alt="" />
              </span>
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
