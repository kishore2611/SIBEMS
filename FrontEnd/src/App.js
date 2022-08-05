import React, { Component } from "react";
import "./App.css";
import Greeting from "./pages/Greeting";
import LandingPage from "./pages/LandingPage";
import Dashboard from "./pages/Dashboard";
// import LogIn from "./pages/Login";
// import SignUp from "./pages/SignUp";
import Menu from "./pages/Menu";
// import BudgetForm from "./pages/BudgetForm";
import Budget from "./pages/Budget";
import FaceMask from "./pages/FaceMask";
// import PrivateRoute from "./pages/PrivateRoute";
// import PublicRoute from "./pages/PublicRoute";
import Authenticated from "./pages/Authentication";
import history from "./pages/history";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  // MemoryRouter,
} from "react-router-dom";

// import { useState } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { User_Data: "", isAuthenticated: false };
  }

  componentDidMount() {
    const User_Data = localStorage.getItem("User_Data");
    console.log("user_data: ", JSON.parse(User_Data));
  }

  render() {
    return (
      <div className="App">
        <Router>
          <Authenticated history={history}>
            <Switch>
              {/* <PrivateRoute component={Dashboard} path="/dashboard" exact /> */}
              <Route exact path="/" component={Greeting} />
              <Route exact path="/LandingPage" component={LandingPage} />
              <Route exact path="/Dashboard" component={Dashboard} />
              <Route exact path="/Menu" component={Menu} />
              {/* <Route exact path="/BudgetForm" component={BudgetForm} /> */}
              <Route exact path="/Budget" component={Budget} />
              <Route exact path="/FaceMask" component={FaceMask} />
              <Route render={() => <Redirect to="/Dashboard" />} />
              <Route
                path="/SignUp"
                render={() => <Redirect to="/SignUp" />}
              />
              {/* <Route path="*" render={() => "404 Not Found!"} /> */}
            </Switch>
          </Authenticated>
        </Router>
      </div>
    );
  }
}

export default App;
