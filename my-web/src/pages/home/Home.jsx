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
function Home(props) {
  const [data, setData] = useState(products);
  const year = new Date().getFullYear();
  useEffect(() => {
    const filteredProducts = products.filter(
      (item) => item.category === "chair"
    );

    setData(filteredProducts);
  }, []);
  return (
    <Helmet title={"Home"}>
      <section className="hero__section">
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="hero__content">
                <p className="hero__content">Trending product in {year}</p>
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
              <div className="hero__image">
                <img src={heroImg} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Services></Services>
      <div className="trending__products">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="section__title">Trending Products</h2>
            </Col>
            <ProductsList data={data} />
          </Row>
        </Container>
      </div>
    </Helmet>
  );
}

export default Home;
