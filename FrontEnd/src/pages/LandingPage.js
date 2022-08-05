import React, { Component } from "react";
import Navbar from "./Navbar";
import Slider from "./Slider";
import About from "./About";
import Services from "./Services";
import FormDet from "./FormDet";
import Testimonial from "./Testimonial";
import Footer from "./footer";

export default class LandingPage extends Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    return (
      <div>
        <React.StrictMode>
          <Navbar handleScreen={this.props.handleScreen} />
          <Slider />
          <About />
          <Services />
          <FormDet />
          <Testimonial />
          <Footer />
        </React.StrictMode>
      </div>
    );
  }
}
