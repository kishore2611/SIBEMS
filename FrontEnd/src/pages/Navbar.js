import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Style.css";
import "./Login";

export default class Navbar extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div data-spy="scroll" data-target=".navbar" data-offset="50">
        <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom">
          <div className="container">
            <Link to="/LandingPage" className="navbar-brand fs-2">
              SIB<span className="text-success">EMS</span>
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link
                    to="/LandingPage"
                    className="nav-link link-success active"
                    aria-current="page"
                    href="#Home"
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/LandingPage" className="nav-link link-success" href="#AboutUs">
                    About Us
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/LandingPage" className="nav-link link-success" href="#Services">
                    Services
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/LandingPage" className="nav-link link-success" href="#Form">
                    FaceMask Detector
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/LandingPage" className="nav-link link-success" href="#Testimonial">
                    Testimonial
                  </Link>
                </li>
                {/* <li className="nav-item">
                  <Link to="/LandingPage" className="nav-link link-success" href="#ContactUs">
                    Contact Us
                  </Link>
                </li> */}
              </ul>
              <Link
                onClick={() => {
                  return this.props.handleScreen("LogIn");
                }}
                className="link-success btn btn-outline-success fs-5 rounded-pill px-4"
              >
                {/* <button className="btn btn-outline-success fs-5 rounded-pill px-4"> */}
                Log In
                {/* </button> */}
              </Link>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
