import React from "react";
import { Container } from "reactstrap";
import "./commonsection.css";

function CommonSection({ ...props }) {
  return (
    <section className="common__section">
      <Container className="text-center">
        <h1>{props.title}</h1>
      </Container>
    </section>
  );
}

export default CommonSection;
