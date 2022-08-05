import React, { Component } from "react";
import "./Greeting.css";
import { Link } from "react-router-dom";

let curDate = new Date();
curDate = curDate.getHours();
let greeting = "";

const cssStyle = {};

if (curDate >= 4 && curDate <= 9) {
  greeting = "Good Morning";
  cssStyle.color = "green";
} else if (curDate >= 10 && curDate <= 15) {
  greeting = "Good Afternoon";
  cssStyle.color = "orange";
} else if (curDate >= 16 && curDate <= 19) {
  greeting = "Good Evening";
  cssStyle.color = "blue";
} else {
  greeting = "Good Night";
  cssStyle.color = "black";
}

export default class Greeting extends Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    return (
      <div className="App bg mar">
        <h1 className="bg-success p-5 rounded">
          Hello Sir,
          <Link
            onClick={() => {
              return this.props.handleScreen("LandingPage");
            }}
            className="text-decoration-none"
          >
            <span className="fw-bold" style={cssStyle}>
              {" "}
              {greeting}{" "}
            </span>
          </Link>
        </h1>
      </div>
    );
  }
}
