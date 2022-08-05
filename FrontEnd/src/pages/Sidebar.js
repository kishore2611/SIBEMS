import React, { Component } from "react";

import "./Style.css";
import "./Sidebar.css";
import { Link } from "react-router-dom";
import history from "./history";

export default class Sidebar extends Component {
  logout = () => {
    localStorage.removeItem("User_Data");
    // history.replace("/LogIn", {state:{
    //   screen:"LogIn"
    // }})
    history.replace({
      pathname: "/LandingPage",
      // search: "?query=abc",
      state: { screen: "LandingPage" },
    });
    window.location.reload();
  };
  render() {
    return (
      <div>
        <header className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow ">
          <a
            className="text-center navbar-brand col-md-3 col-lg-2 me-0 px-3 fs-3"
            href=""
          >
            SIB <span className="text-success">EMS</span>
          </a>
          <button
            className="navbar-toggler position-absolute d-md-none collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="sidebarMenu"
            aria-controls="sidebarMenu"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="navbar-nav">
            <div className="nav-item text-nowrap fs-5">
              <button
                onClick={() => this.logout()}
                className="text-decoration-none px-5"
              >
                Sign out
              </button>
            </div>
          </div>
        </header>

        <div className="container-fluid">
          <div className="row">
            <nav
              id="sidebarMenu"
              className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"
            >
              <div className="position-sticky pt-3">
                <ul className="nav flex-column fs-5 text-center mt-5">
                  <li className="nav-item">
                    <Link
                      to="/Dashboard"
                      className="nav-link active text-decoration-none"
                      aria-current="page"
                    >
                      <span data-feather="home"></span>
                      Profile
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/Menu" className="nav-link text-decoration-none">
                      <span data-feather="file"></span>
                      Menu Form
                    </Link>
                  </li>
                  {/* <li className="nav-item">
                    <Link
                      to="/BudgetForm"
                      className="nav-link text-decoration-none"
                    >
                      <span data-feather="shopping-cart"></span>
                      Budget Form
                    </Link>
                  </li> */}
                  <li className="nav-item">
                    <Link
                      to="/Budget"
                      className="nav-link text-decoration-none"
                    >
                      <span data-feather="shopping-cart"></span>
                      Budget
                    </Link>
                  </li>
                  {/* <li className="nav-item">
                    <Link
                      to="/BudgetForm"
                      className="nav-link text-decoration-none"
                    >
                      <span data-feather="users"></span>
                      Invitation Card
                    </Link>
                  </li> */}
                  <li className="nav-item">
                    <Link
                      to="/FaceMask"
                      className="nav-link text-decoration-none"
                    >
                      <span data-feather="bar-chart-2"></span>
                      FaceMask
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    );
  }
}
