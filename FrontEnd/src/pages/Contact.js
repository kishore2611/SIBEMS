import React, { Component } from "react";
import { Form } from "react-bootstrap";
import "./Style.css";
import "bootstrap-icons/font/bootstrap-icons.css";
// import { Image, Row, Col, Button } from 'react-bootstrap';

export default class Contact extends Component {
  
  render() {
    return (
      <section className="py-5 page-section bg-success">
        <div className="container">
          <h2 className="text-center mt-0">Contact Us</h2>
          <hr className="divider my-4" />
          <div className="row mt-5">
            <div className="col-lg-4">
              <div className="info">
                <div className="address">
                  <i
                    className="bi bi-geo-alt text-white mb-4"
                    style={{ fontSize: 25 }}
                  ></i>
                  <h4>Location:</h4>
                  <p>A108 Adam Street, New York, NY 535022</p>
                </div>

                <div className="email">
                  <i
                    className="bi bi-envelope text-white mb-4"
                    style={{ fontSize: 25 }}
                  ></i>
                  <h4>Email:</h4>
                  <p>info@example.com</p>
                </div>

                <div className="phone">
                  <i
                    className="bi bi-phone text-white mb-4"
                    style={{ fontSize: 25 }}
                  ></i>
                  <h4>Call:</h4>
                  <p>+1 5589 55488 55s</p>
                </div>
              </div>
            </div>

            <div className="col-lg-8 mt-5 mt-lg-0">
              <Form action="" method="post" role="form" className="email-form">
                <div className="row">
                  <div className="col-md-6 form-group">
                    <input
                      type="text"
                      name="name"
                      
                      className="form-control"
                      id="name"
                      placeholder="Your Name"
                      
                      required
                    />
                  </div>
                  <div className="col-md-6 form-group mt-3 mt-md-0">
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      
                      id="email"
                      placeholder="Your Email"
                      required
                    />
                  </div>
                </div>
                <div className="form-group mt-3">
                  <input
                    type="text"
                    className="form-control"
                    name="subject"
                    
                    id="subject"
                    placeholder="Subject"
                    required
                  />
                </div>
                <div className="form-group mt-3">
                  <textarea
                    className="form-control"
                    name="message"
                    
                    rows="5"
                    placeholder="Message"
                    required
                  ></textarea>
                </div>
                {/* <div className="my-3">
                <div className="loading">Loading</div>
                <div className="error-message"></div>
                <div className="sent-message">Your message has been sent. Thank you!</div>
              </div> */}
                <div className="text-left mt-3">
                  <button type="submit" value="">Send Message</button>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
