import React from "react";
import "./thank-you.css";
import { NavLink } from "react-router-dom";
import { Button } from "reactstrap";
function ThankYou(props) {
  return (
    <section>
      <div className="thank__you">
        <span>
          <i class="uil uil-check-circle"></i>
        </span>
        <h1>Thank You</h1>
        <h3>your order will be shipped soon.</h3>

        <Button className="btn primary__btn">
          <NavLink to="/home">Back to Home</NavLink>
        </Button>
      </div>
    </section>
  );
}

export default ThankYou;
