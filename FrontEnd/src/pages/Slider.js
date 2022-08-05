import React, {Component} from 'react';
import './Style.css';
import {Carousel} from 'react-bootstrap';
import slider1 from './images/slider1.jpg';
import slider2 from './images/slider2.jpg';
import slider3 from './images/slider3.jpg';



export default class Slider extends Component {

  render(){
  return (
    <Carousel id="Home">
      <Carousel.Item>
        <img
          className="d-block w-100 h-100"
          src={slider1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Singing Event</h3>
          <p>Team Singing Events: One Voice. Everyone can sing, and One Voice is the team event that proves it. The human voice is the oldest.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 h-100"
          src={slider2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Consulting</h3>
          <p>A consultant is someone who has some level of expertise that a particular group of people find valuable, and people within that group</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 h-100"
          src={slider3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Merriage Function</h3>
          <p>a combination or mixture of elements.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
}
