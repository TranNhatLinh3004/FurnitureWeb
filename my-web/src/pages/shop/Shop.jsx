import React, { useState } from "react";
import Helmet from "../../components/helmet/Helmet";
import CommonSection from "../../components/UI/commonsection/CommonSection";
import { Col, Container, Row } from "reactstrap";
import "./shop.css";

import products from "../../assets/data/products";

import ProductsList from "../../components/UI/productslist/ProductsList";

function Shop(props) {
  const [productsData, setProductsData] = useState(products);
  const [search, setSearch] = useState("");

  const handleFilter = (e) => {
    let val = e.target.value;
    if (val === "sofa") {
      const filteredProduct = products.filter(
        (item) => item.category === "sofa"
      );

      setProductsData(filteredProduct);
    }

    if (val === "chair") {
      const filteredProduct = products.filter(
        (item) => item.category === "chair"
      );

      setProductsData(filteredProduct);
    }
    if (val === "all") {
      setProductsData(products);
    }
  };
  const handleSearch = (e) => {
    let val = e.target.value;
    if (val) {
      const filteredProduct = products.filter((item) =>
        item.productName.toLowerCase().includes(val.toLowerCase())
      );
      setProductsData(filteredProduct);
    } else {
      setProductsData(products);
    }
  };
  return (
    <Helmet title="Shop">
      <CommonSection title="Products"></CommonSection>

      <section>
        <Container>
          <Row>
            <Col lg="3" md="3">
              <div className="filter__widget">
                <select onChange={handleFilter}>
                  <option value="all">All Categories</option>
                  <option value="sofa">Sofa</option>
                  <option value="chair">Chair</option>
                </select>
              </div>
            </Col>
            <Col lg="3" md="3">
              <div className="filter__widget">
                <select>
                  <option>Sort By</option>
                  <option value="sofa">Ascending</option>
                  <option value="chair">Descending</option>
                </select>
              </div>
            </Col>
            <Col lg="6" md="6">
              <div className="search__box">
                <input
                  type="text"
                  placeholder="Search..."
                  onChange={handleSearch}
                />
                <span>
                  <i class="ri-search-line"></i>
                </span>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="pt-0" style={{ top: "-70px" }}>
        <Container>
          <Row>
            {productsData.length === 0 ? (
              <h1 className="text-center">No products are found </h1>
            ) : (
              <ProductsList data={productsData}></ProductsList>
            )}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
}

export default Shop;
