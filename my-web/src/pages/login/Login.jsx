import React, { useState } from "react";
import Helmet from "../../components/helmet/Helmet";
import { Col, Container, Row, Form, FormGroup } from "reactstrap";
import "./login.css";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase.config";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "../../firebase.config";
import { db } from "../../firebase.config";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { toast } from "react-toastify";

function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const signIn = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      console.log(user);
      setLoading(false);
      toast.success(
        "You are logged in successfully. Welcome " + user.displayName
      );
      navigate("/checkout");
    } catch (error) {
      setLoading(false);

      if (error.code === "auth/user-not-found") {
        toast.error(
          "Email does not exist or incorrect password.Please try again."
        );
      }
    }
  };

  return (
    <Helmet title="Login">
      <section className="">
        <Container>
          <Row>
            {loading ? (
              <Col
                lg="6"
                className="text-center"
                style={{ marginLeft: "330px", marginBottom: "140px" }}
              >
                <h6 className="fw-bold text-center">Loading...</h6>
              </Col>
            ) : (
              <Col lg="6" className="m-auto text-center">
                <Form className="auth__form" onSubmit={signIn}>
                  <h3
                    className="fw-bold fs-4
                 mb-4
                "
                  >
                    Login
                  </h3>

                  <FormGroup className="form__group">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </FormGroup>
                  <FormGroup className="form__group">
                    <input
                      type="password"
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </FormGroup>
                  <button type="submit" className="buy__btn auth__btn">
                    Login
                  </button>
                  <p>
                    Don't have an account?{" "}
                    <Link to="/register">Create an account</Link>
                  </p>
                </Form>
              </Col>
            )}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
}

export default Login;
