import React, {Component} from 'react';
import './Style.css';
import 'bootstrap-icons/font/bootstrap-icons.css';




export default class Services extends Component {

  render(){
  return (
    <section id="Services" className="py-5 page-section">
      <div className="container">
        <h2 className="text-center mt-0">At Your Service</h2>
        <hr className="divider my-4" />
        <div className="row">
          <div className="col-lg-4 col-md-6 text-center">
            <div className="mt-5">
              <i className="bi bi-laptop text-success mb-4" style={{ fontSize: 50 }}></i>
              <h3 className="h4 mb-2">Parties</h3>
              <p className="text-muted mb-0">a formally constituted political group that contests elections and attempts to form or take part in a government.</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 text-center">
            <div className="mt-5">
              
              <i className="bi bi-file-code text-success mb-4" style={{ fontSize: 50 }}></i>
              <h3 className="h4 mb-2">Marriage Functions</h3>
              <p className="text-muted mb-0">Marriage is the process by which two people make their relationship public, official, and permanent. It is the joining of two people in a bond that putatively lasts until death, but in practice is often cut short by separation or divorce.</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 text-center">
            <div className="mt-5">
              <i className="bi bi-envelope text-success mb-4" style={{ fontSize: 50 }}></i>
              <h3 className="h4 mb-2">Birthday Parties</h3>
              <p className="text-muted mb-0">Make the next birthday you celebrate a special one and personalize your birthday wishes with a few happy birthday quotes.</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 text-center">
            <div className="mt-5">
              <i className="bi bi-graph-up text-success mb-4" style={{ fontSize: 50 }}></i>
              <h3 className="h4 mb-2">Kitty Parties</h3>
              <p className="text-muted mb-0">The kitty party is a rotating savings association, wherein the member women pay a certain amount at every meeting into the pool, or kitty. The host gets the collected sum of money; each member has to host the kitty once every round. ... “Still, it was my clear impression that it meant something to the women.”</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 text-center">
            <div className="mt-5">
              <i className="bi bi-phone text-success mb-4" style={{ fontSize: 50 }}></i>
              <h3 className="h4 mb-2">Anniversries</h3>
              <p className="text-muted mb-0">The definition of an anniversary is a date on which something important happens that is noted in some way each year thereafter. An example of an anniversary is the day on which a person got married. An example of an anniversary is 9/11 after the bombing in New York. ... The six-month anniversary of their wedding.</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 text-center">
            <div className="mt-5">
              <i className="bi bi-play-circle text-success mb-4" style={{ fontSize: 50 }}></i>
              <h3 className="h4 mb-2">Gatherings</h3>
              <p className="text-muted mb-0">The Regulations define a 'gathering' as: 'any assembly, concourse or procession of more than 100 persons, wholly or partially in open air or in a building or premises'.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
}