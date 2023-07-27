import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import heroImg from "../../assets/images/hero-img.png";
import Helmet from "../../components/helmet/Helmet";
import { motion } from "framer-motion";
import "./home.css";
import { Link } from "react-router-dom";
import Services from "../../components/services/Services.jsx";
import products from "../../assets/data/products";
import ProductsList from "../../components/UI/productslist/ProductsList";

import countImage from "../../assets/images/counter-timer-img.png";
import Clock from "../../components/UI/clock/Clock";
import handleScroll from "../../feature/handleScroll";
function Home(props) {
  const [trendingProducts, setTrendingProducts] = useState([]);
  const [bestSalesProducts, setBestSalesProducts] = useState([]);

  const year = new Date().getFullYear();
  useEffect(() => {
    const filteredProducts = products.filter(
      (item) => item.category === "chair"
    );

    const filteredBestSalesProducts = products.filter(
      (item) => item.category === "sofa"
    );
    setBestSalesProducts(filteredBestSalesProducts);
    setTrendingProducts(filteredProducts);
  }, []);

  let height = document.body.scrollHeight;
  const [scrollY, setHeight] = useState(height);
  window.addEventListener("scroll", () => {
    setHeight(document.body.scrollHeight);
  });

  useEffect(() => {
    window.scrollTo(0, 0);
    handleScroll();

    // document.header.className = icon;
  }, [scrollY]);
  return (
    <Helmet title={"Home"}>
      <section className="hero__section" id="home">
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="hero__content  hidden">
                <p className="">Trending product in {year}</p>
                <h2>Make Your Interior More Minimalistic % Modern</h2>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Fugit corrupti praesentium quos vero error officiis fugiat
                  fuga dolores, dolor quasi veritatis sit odio exercitationem
                  perferendis blanditiis ducimus laborum ad neque!
                </p>
                <button whileTap={{ scale: 1.2 }} className="buy__btn">
                  <Link to="/shop">SHOP NOW</Link>
                </button>
              </div>
            </Col>
            <Col lg="6" md="6">
              <div className="hero__image hidden">
                <img src={heroImg} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Services></Services>

      <section className="trending__products">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="section__title">Trending Products</h2>
            </Col>
            <ProductsList data={trendingProducts} />
          </Row>
        </Container>
      </section>

      <section className="timer__count hidden">
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="clock__top__content">
                <h4 className="text-white fs-6 mb-2">Limited Offers</h4>
                <h3 className="text-white fs-5 mb-3">Quality Armchair</h3>
              </div>
              <Clock />
              <button className="buy__btn store__btn">
                <Link to="/shop">Visit Store</Link>
              </button>
              {/* <img src={countImage} alt="" /> */}
            </Col>
            <Col lg="6" md="6" className="text-end">
              <img src={countImage} alt="" />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="best__sales">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="section__title">Best Selling</h2>
            </Col>
            <ProductsList data={bestSalesProducts} />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
}

export default Home;
