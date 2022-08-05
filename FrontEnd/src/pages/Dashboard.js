import React, { Component } from "react";

import "./Style.css";
// import ReactDOM from 'react-dom';
import Sidebar from "./Sidebar";

export default class Dashboard extends Component {
  render() {
    return (
      <div>
        <React.StrictMode>
          <Sidebar />
        </React.StrictMode>

        <div>
          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
              <h1 className="h2">Profile</h1>
              {/* <div className="btn-toolbar mb-2 mb-md-0">
                  <div className="btn-group me-2">
                    <button type="button" className="btn btn-sm btn-outline-success">Share</button>
                    <button type="button" className="btn btn-sm btn-outline-success">Export</button>
                  </div>
                  
                </div> */}
            </div>
          </main>
          <div className="container">
            {/* <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeuo9fZyptLASOQ7kxqdwAtuA2YJS2-Mf1VQ8WKmidpL2-ImA/viewform?embedded=true" width="640" height="3192" frameBorder="0" marginHeight="0" marginWidth="0">Loading…</iframe> */}
            <div className="row justify-content-center">
              <div className="col-lg-8 text-center">
                <h2 className="text-black mt-0">About Us</h2>
                <hr className="divider dark my-4" />
                <h3 className="text-black mb-4">
                  We are a Top-notch Event provider.
                </h3>
                <p className="text-white-75 mb-4">
                  As people across the globe are combating the COVID-19 pandemic
                  it becomes very essential to develop new technologies to
                  analyze and fight against the disease spread. The most
                  essential protection against the coronavirus is Face Mask as
                  recommended by the WORLD HEALTH ORGANIZATION. Everyone needs
                  to wear a mask to counter the virus spread from person to
                  person. It is a real-world problem{" "}
                </p>
                <p className="text-white-75 mb-4">
                  This project idea is depending on the current COVID19
                  situation is different countries across the globe, their
                  respective government has proposed certain guardians to
                  control the COVID19 spread among use of mask, 6 feet (ft.).
                  distance, ban of public and private sectors gatherings such as
                  festivals, wedding ceremonies, formal parties, Meeting Era But
                  people want to do events like wedding ceremonies and allow a
                  specific amount of people they can do an event.{" "}
                </p>
                <p className="text-white-75 mb-4">
                  With regards to this pandemic, we have the solution for events
                  and we have designed a website -smart event management system,
                  through this website we offer them different outdoor services
                  at their place with which they can conduct these events safe
                  and secure with limited entries. We offer them to book our
                  services online through our website which facilitates
                  decorative services, catering, and most importantly not
                  forgetting about the law of social distancing in an event, and
                  if someone does not have a face mask during their cultural
                  customs our face mask detector alerts them to wear a face mask
                  for safety. They interact easily with us we provide services
                  which they want and book our service online at home. So Smart
                  Event management system will be used to manage all the
                  activities related to the event. In any event, many service
                  providers work simultaneously and it is very hard to manage
                  these providers. It is important for event organizers that
                  they have all the contact details of these service providers
                  so that they can contact them at any time to plan an event at
                  a given time.{" "}
                </p>
                <p className="text-white-75 mb-4">
                  4. Event management is a system of project management to
                  create and develop events such as festivals, wedding
                  ceremonies, formal parties, Meeting Era. To organize an event
                  People need to find or book an online events place and be
                  willing to see the packages and timing to slots online about
                  outdoor places. They will be able to get all this information
                  through this system.
                </p>
                <button
                  className="btn btn-outline-warning fs-5 rounded-pill px-4"
                  type="submit"
                >
                  Get Started!
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
