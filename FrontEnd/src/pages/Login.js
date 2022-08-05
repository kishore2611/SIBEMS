import React, { Component } from "react";

import { Link } from "react-router-dom";
import "./Style.css";
import {
  Col,
  Container,
  Form,
  Row,
  FormGroup,
  FormText,
  Button,
} from "react-bootstrap";
import axios from "axios";

export default class LogIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      emailError: "",
      passwordError: "",
    };
  }
  

  signInHandler = async () => {
    let isValid = true;
    const { email, password } = this.state;

    if (!email) {
      isValid = false;
      this.setState({ emailError: "*Required!" });
    } else {
      this.setState({ emailError: "" });
    }
    if (!password) {
      isValid = false;
      this.setState({ passwordError: "*Required!" });
    } else {
      this.setState({ passwordError: "" });
    }
    // debugger;

    if (isValid) {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      // Request body

      const body = JSON.stringify({
        email,
        password,
      });
      console.log(body);

      await axios
        .post("http://localhost:9002/api/auth/login", body, config)
        .then(async (response) => {
          // handle success

          if (response.data.result === true) {
            console.log("Something went wrong ", response);
            // localStorage.setItem("User_Data", response);
          } else {
            console.log("Logged In Successfully!", response);
            const data = JSON.stringify(response.data.token);
            localStorage.setItem("User_Data", data);
            window.location.reload();
          }
        })
        .catch((error) => {
          console.log(error.message);
        });
    }
  };
  render() {
    let { email, password } = this.state;

    return (
      <Container fluid className="bg">
        {/* <Form className="form-bg"> */}
        <Row className="justify-content-center pad ">
          <Col lg={4} md={6} sm={12}>
            <Form className="box p-5 rounded">
              <h3 className="text-center text-white fw-normal">LogIn</h3>
              <p className="text-muted text-center">
                Please enter your login and password!
              </p>
              <FormGroup className="mb-3" controlId="formBasicEmail">
                {/* <Form.Label>Email address</Form.Label> */}
                <Form.Control
                  type="email"
                  value={email}
                  onChange={(e) => this.setState({ email: e.target.value })}
                  placeholder="Username or Email"
                />
                {this.state.emailError ? (
                  <p style={{ color: "red" }}>{this.state.emailError}</p>
                ) : null}
              </FormGroup>
              <FormGroup className="mb-3" controlId="formBasicPassword">
                <Form.Control
                  type="password"
                  value={password}
                  onChange={(e) => this.setState({ password: e.target.value })}
                  placeholder="Password"
                />
                {this.state.passwordError ? (
                  <p style={{ color: "red" }}>{this.state.passwordError}</p>
                ) : null}

                <FormText className="text-muted">
                  <Link to="/" className="forgot">
                    <p className="text-end">Forgot Password?</p>
                  </Link>
                </FormText>
              </FormGroup>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check
                  type="checkbox"
                  label="Remember me"
                  className="text-muted"
                />
              </Form.Group>
              <Link to="/Dashboard">
                <Button
                  variant="primary"
                  type="button"
                  className="text-center align-center px-5 d-grid col-6 mx-auto"
                  onClick={() => this.signInHandler()}
                >
                  LogIn
                </Button>
              </Link>
              <FormText className="text-muted">
                <p className="text-center mt-3">
                  Don't have an Acount{" "}
                  <a
                    onClick={() => {
                      return this.props.handleScreen("SignUp");
                    }}
                    className="forgot"
                    style={{ cursor: "pointer" }}
                  >
                    SignUp
                  </a>
                </p>
              </FormText>
            </Form>
          </Col>
        </Row>
        {/* </Form> */}
      </Container>
    );
  }
}
