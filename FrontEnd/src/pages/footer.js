import React, { Component } from "react";
import "./Style.css";
import "bootstrap-icons/font/bootstrap-icons.css";
// import { Image, Row, Col, Button } from 'react-bootstrap';

export default class Footer extends Component {
  render() {
    return (
      // <section className="py-5 page-section bg-success">
      //   <div className="container">
      //     <h2 className="text-center mt-0"> Footer </h2>
      //     <hr className="divider my-4" />

      //   </div>
      <footer class="page-footer font-small blue">
        <div class="footer-copyright text-center py-3">
          © 2020 Copyright:
          <a href=""> SIBEMS.com</a>
        </div>
      </footer>
      // {/* </section> */}
    );
  }
}
