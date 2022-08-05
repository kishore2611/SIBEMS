import React, {Component} from 'react';
import './Style.css';
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import testimonial2 from '../pages/images/testimonial2.jpg';
import testimonial5 from '../pages/images/testimonial5.jpg';
import testimonial4 from '../pages/images/testimonial4.jpg';
import testimonial3 from '../pages/images/testimonial3.jpg';
import testimonial1 from '../pages/images/testimonial1.jpg';



export default class Testimonial extends Component {

  render(){
  return (
    <section className="py-5 page-section bg-light">
      <div className="container">
        <h2 className="text-center mt-0">Testimonials</h2>
        <hr className="divider my-4" />
        <div className="row">
        <div className="pt-5 col-lg-4 col-md-6 text-center"></div>
        <div className="pt-5 col-lg-4 col-md-6 text-center">
            <Card className="">
              <Card.Header as="h5">Coordinator</Card.Header>
              <Card.Body>
                <Card.Img variant="top" src={testimonial1} />
                <Card.Title className="pt-2">Dr. Mazhar Ali Dootio</Card.Title>
                <Card.Text>
                  With supporting text below as a natural lead-in to additional content.
                </Card.Text>
                <Button variant="success" className="align-center">Detail</Button>
              </Card.Body>
            </Card>
          </div>
          <div className="pt-5 col-lg-4 col-md-6 text-center"></div>
          <div className="pt-5 col-lg-4 col-md-6 text-center"></div>
          <div className="pt-5 col-lg-4 col-md-6 text-center">
              <Card className="">
                <Card.Header as="h5">Superviser</Card.Header>
                <Card.Body>
                  <Card.Img variant="top" src={testimonial2} />
                  <Card.Title className="pt-2">Mr. Anwar Ali Sathio</Card.Title>
                  <Card.Text>
                    With supporting text below as a natural lead-in to additional content.
                  </Card.Text>
                  <Button variant="success" className="align-center">Detail</Button>
                </Card.Body>
              </Card>
            </div>
          <div className="pt-5 col-lg-4 col-md-6 text-center"></div>
          
          <div className="pt-5 col-lg-4 col-md-6 text-center">
            <Card>
              <Card.Header as="h5">Group Member</Card.Header>
              <Card.Body>
                <Card.Img variant="top" src={testimonial3} />
                <Card.Title className="pt-2">Adnan Ali </Card.Title>
                <Card.Text>
                  Registration No. 541BCS/18-S/9
                </Card.Text>
                <Button variant="success" className="align-center">Detail</Button>
              </Card.Body>
            </Card>
          </div>
          <div className="pt-5 col-lg-4 col-md-6 text-center">
            <Card>
              <Card.Header as="h5">Group Member</Card.Header>
              <Card.Body>
                <Card.Img variant="top" src={testimonial4} />
                <Card.Title className="pt-2">Kishore Kumar</Card.Title>
                <Card.Text>
                Registration No. 569BCS/18-S/9
                </Card.Text>
                <Button variant="success" className="align-center">Detail</Button>
              </Card.Body>
            </Card>
          </div>
          <div className="pt-5 col-lg-4 col-md-6 text-center">
            <Card>
              <Card.Header as="h5">Group Member</Card.Header>
              <Card.Body>
                <Card.Img variant="top" src={testimonial5} />
                <Card.Title className="pt-2">Govinda</Card.Title>
                <Card.Text>
                Registration No. 553BCS/18-S/9
                </Card.Text>
                <Button variant="success" className="align-center">Detail</Button>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
}