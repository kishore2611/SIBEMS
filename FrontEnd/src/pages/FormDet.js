import React, { Component } from "react";
import "./Style.css";
import { Image } from "react-bootstrap";
// import { Form } from "react-bootstrap";
import { Row } from "react-bootstrap";
// import { Col } from "react-bootstrap";
// import { Button } from "react-bootstrap";
import facemask1 from "../pages/images/Facemask1.jpeg";
import facemask2 from "../pages/images/Facemask2.jpeg";
import facemask3 from "../pages/images/Facemask3.jpeg";
import facemask4 from "../pages/images/Facemask4.jpeg";
import facemask5 from "../pages/images/Facemask5.jpeg";

export default class FormDet extends Component {
  render() {
    return (
      <section className="py-5 page-section bg-success">
        <div className="container">
          <h2 className="text-center mt-0">FaceMask Detector</h2>
          <hr className="divider my-4" />
          <div className="row">
            <Row className="mb-3">
              <div className="pt-5 col-lg-4 col-md-12">
                <div className="pt-5 col-lg-6 col-md-12">
                  <Image src={facemask1} fluid style={{ borderRadius: 20 }} />
                </div>
                <div className="pt-5 col-lg-6 col-md-12">
                  <Image src={facemask2} fluid style={{ borderRadius: 20 }} />
                </div>
              </div>
              <div className="pt-5 col-lg-4 col-md-12">
                <div className="pt-5 col-lg-6 col-md-12">
                  <Image src={facemask3} fluid style={{ borderRadius: 20 }} />
                </div>
                <div className="pt-5 col-lg-6 col-md-12">
                  <Image src={facemask4} fluid style={{ borderRadius: 20 }} />
                </div>
              </div>
              <div className="pt-5 col-lg-4 col-md-12">
                <div className="pt-5 col-lg-6 col-md-12">
                  <Image src={facemask5} fluid style={{ borderRadius: 20 }} />
                </div>
                
              </div>
            </Row>
            
          </div>
        </div>
      </section>
    );
  }
}
