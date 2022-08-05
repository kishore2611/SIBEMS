import React, {Component} from 'react';
import './Style.css';




export default class About extends Component {

  render(){
  return (
    <section id="AboutUs" className="py-5 bg-success">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center">
            <h2 className="text-white mt-0">About Us</h2>
            <hr className="divider light my-4" />
            <h3 className="text-white mb-4">We are a Top-notch Event provider.</h3>
            <p className="text-white-75 mb-4">
            As people across the globe are combating the COVID-19 pandemic it becomes very essential to develop new technologies to analyze and fight against the disease spread. The most essential protection against the coronavirus is Face Mask as recommended by the WORLD HEALTH ORGANIZATION.  Everyone needs to wear a mask to counter the virus spread from person to person. It is a real-world problem </p>
            <p className="text-white-75 mb-4">This project idea is depending on the current COVID19 situation is different countries across the globe, their respective government has proposed certain guardians to control the COVID19 spread among use of mask, 6 feet (ft.). distance, ban of public and private sectors gatherings such as festivals, wedding ceremonies, formal parties, Meeting Era But people want to do events like wedding ceremonies and allow a specific amount of people they can do an event. </p>
            <p className="text-white-75 mb-4">With regards to this pandemic, we have the solution for events and we have designed a website -smart event management system, through this website we offer them different outdoor services at their place with which they can conduct these events safe and secure with limited entries. We offer them to book our services online through our website which facilitates decorative services, catering, and most importantly not forgetting about the law of social distancing in an event, and if someone does not have a face mask during their cultural customs our face mask detector alerts them to wear a face mask for safety. They interact easily with us we provide services which they want and book our service online at home. So Smart Event management system will be used to manage all the activities related to the event. In any event, many service providers work simultaneously and it is very hard to manage these providers. It is important for event organizers that they have all the contact details of these service providers so that they can contact them at any time to plan an event at a given time. </p>
            <p className="text-white-75 mb-4">4.	Event management is a system of project management to create and develop events such as festivals, wedding ceremonies, formal parties, Meeting Era. To organize an event People need to find or book an online events place and be willing to see the packages and timing to slots online about outdoor places. They will be able to get all this information through this system.</p>
            <button className="btn btn-outline-warning fs-5 rounded-pill px-4" type="submit">Get Started!</button>
          </div>
        </div>
      </div>
    </section>
  );
}
}
