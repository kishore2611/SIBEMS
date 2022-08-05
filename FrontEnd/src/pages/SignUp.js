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
import history from "./history";

export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fName: "",
      lName: "",
      email: "",
      phoneNo: "",
      city: "",
      state: "",
      password: "",
      confirmPassword: "",
      fNameError: "",
      emailError: "",
      phoneNoError: "",
      passwordError: "",
      confirmPasswordError: "",
    };
  }

  signUpHandler = async () => {
    let isValid = true;
    const {
      fName,
      lName,
      email,
      phoneNo,
      city,
      state,
      password,
      confirmPassword
    } = this.state;


    if (!fName) {
      isValid = false;
      this.setState({ fNameError: "*Required!" });
    } else {
      this.setState({ fNameError: "" });
    }
    // if (!lName) {
    //   isValid = false;
    //   this.setState({ lNameError: "*Required!" });
    // } else {
    //   this.setState({ lNameError: "" });
    // }
    if (!email) {
      isValid = false;
      this.setState({ emailError: "*Required!" });
    } else {
      this.setState({ emailError: "" });
    }
    if (!phoneNo) {
      isValid = false;
      this.setState({ phoneNoError: "*Required!" });
    } else {
      this.setState({ phoneNoError: "" });
    }
    // if (!city) {
    //   isValid = false;
    //   this.setState({ cityError: "*Required!" });
    // } else {
    //   this.setState({ cityError: "" });
    // }
    // if (!state) {
    //   isValid = false;
    //   this.setState({ stateError: "*Required!" });
    // } else {
    //   this.setState({ stateError: "" });
    // }
    if (!password) {
      isValid = false;
      this.setState({ passwordError: "*Required!" });
    } else {
      this.setState({ passwordError: "" });
    }
    if (!confirmPassword) {
      isValid = false;
      this.setState({ confirmPasswordError: "*Required!" });
    } else {
      this.setState({ confirmPasswordError: "" });
    }

    if (isValid) {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      // Request body
      const body = JSON.stringify({
        fName,
        lName,
        email,
        phoneNo,
        city,
        state,
        password,
        confirmPassword,
      });
      console.log(body);

      await axios
        .post("http://localhost:9002/api/auth/register", body, config)
        .then(async (response) => {
          // handle success
          if (response.data.result === true) {
            console.log("Something went wrong ", response);
          } else {
            console.log("Successfully Created", response);
            history.replace({
              pathname: "/LogIn",
              // search: "?query=abc",
              state: { screen: "LogIn" },
            });
            window.location.reload();
          }
        })
        .catch((error) => {
          console.log(error.message);
        });
    }
  };

  render() {
    console.log(this.state.fName);

    let {
      fName,
      lName,
      email,
      phoneNo,
      city,
      state,
      password,
      confirmPassword,
    } = this.state;

    return (
      <Container fluid className="bg">
        {/* <Form className="form-bg"> */}
        <Row className="justify-content-center pad ">
          <Col lg={4} md={6} sm={12}>
            <Form className="box p-5 rounded">
              <h3 className="text-center text-white fw-normal">SignUp</h3>
              <p className="text-muted text-center">
                Please enter your Detail to SignUp
              </p>
              <FormGroup className="mb-3">
                <Row>
                  <Col>
                    <Form.Control
                      type="text"
                      placeholder="First Name"
                      value={fName}
                      onChange={(e) => this.setState({ fName: e.target.value })}
                    />
                  </Col>
                  <Col>
                    <Form.Control
                      type="text"
                      placeholder="Last Name"
                      value={lName}
                      onChange={(e) => this.setState({ lName: e.target.value })}
                    />
                  </Col>
                </Row>
              </FormGroup>
              <FormGroup className="mb-3" controlId="formBasicEmail">
                {/* <Form.Label>Email address</Form.Label> */}
                <Form.Control
                  type="email"
                  placeholder="Username or Email"
                  value={email}
                  onChange={(e) => this.setState({ email: e.target.value })}
                />
              </FormGroup>
              <FormGroup className="mb-3" controlId="formBasicPhone">
                <Form.Control
                  type="text"
                  placeholder="Phone Number"
                  value={phoneNo}
                  onChange={(e) => this.setState({ phoneNo: e.target.value })}
                />
              </FormGroup>
              <FormGroup className="mb-3">
                <Row>
                  <Col>
                    <Form.Control
                      type="text"
                      placeholder="City"
                      value={city}
                      onChange={(e) => this.setState({ city: e.target.value })}
                    />
                  </Col>
                  <Col>
                    <Form.Control
                      type="text"
                      placeholder="State"
                      value={state}
                      onChange={(e) => this.setState({ state: e.target.value })}
                    />
                  </Col>
                </Row>
              </FormGroup>
              <FormGroup className="mb-3">
                <Form.Control
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => this.setState({ password: e.target.value })}
                />
              </FormGroup>
              <FormGroup className="mb-3">
                <Form.Control
                  type="password"
                  placeholder="Re-Enter Password"
                  value={confirmPassword}
                  onChange={(e) =>
                    this.setState({ confirmPassword: e.target.value })
                  }
                />
              </FormGroup>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check
                  type="checkbox"
                  label="I agree all Statements in Terms of Services"
                  className="text-muted"
                />
              </Form.Group>
              <Link to="/Login">
                <Button
                  variant="primary"
                  type="button"
                  value="submit"
                  onClick={() => this.signUpHandler()}
                  className="text-center align-center mb-3 px-5 d-grid col-6 mx-auto"
                >
                  SignUp
                </Button>
              </Link>
              <FormText className="text-muted">
                <a
                  onClick={() => {
                      return this.props.handleScreen("LogIn");
                    }}
                  className="forgot"
                  style={{ cursor: "pointer" }}
                >
                  <p className="text-center text-muted">Already Member</p>
                </a>
              </FormText>
            </Form>
          </Col>
        </Row>
        {/* </Form> */}
      </Container>
    );
  }
}
