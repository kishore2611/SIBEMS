import React, { Component } from "react";
import "./Style.css";
import Sidebar from "./Sidebar";
import { Button, Card, CardGroup } from "react-bootstrap";
import Facemask1 from "../pages/images/Facemask1.jpeg";
import Facemask2 from "../pages/images/Facemask2.jpeg";
import Facemask3 from "../pages/images/Facemask3.jpeg";
import Facemask4 from "../pages/images/Facemask4.jpeg";
import Facemask5 from "../pages/images/Facemask5.jpeg";

export default class FaceMask extends Component {
  render() {
    return (
      <div>
        <React.StrictMode>
          <Sidebar />
        </React.StrictMode>
        <div>
          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
              <h1 className="h2">FaceMask Video</h1>
              {/* <div className="btn-toolbar mb-2 mb-md-0">
              <div className="btn-group me-2">
                <button type="button" className="btn btn-sm btn-outline-success">Share</button>
                <button type="button" className="btn btn-sm btn-outline-success">Export</button>
              </div>
                  
            </div> */}
            </div>
            <CardGroup>
              <Card>
                <Card.Img variant="top" src={Facemask1} />
                <Card.Body>
                  <Card.Title>No Mask with Hand</Card.Title>
                </Card.Body>
              </Card>
              <Card>
                <Card.Img variant="top" src={Facemask2} />
                <Card.Body>
                  <Card.Title>Mask on Chin</Card.Title>
                </Card.Body>
              </Card>
              <Card>
                <Card.Img variant="top" src={Facemask3} />
                <Card.Body>
                  <Card.Title>No Mask</Card.Title>
                </Card.Body>
              </Card>
              <Card>
                <Card.Img variant="top" src={Facemask4} />
                <Card.Body>
                  <Card.Title>Side Mask</Card.Title>
                </Card.Body>
              </Card>
              <Card>
                <Card.Img variant="top" src={Facemask5} />
                <Card.Body>
                  <Card.Title>Full Mask</Card.Title>
                </Card.Body>
              </Card>
            </CardGroup>
            <Button className="my-5" href="http://127.0.0.1:8501">Open FaceMask Detector</Button>
          </main>
        </div>
      </div>
    );
  }
}
