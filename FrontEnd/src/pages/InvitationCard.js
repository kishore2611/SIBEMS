import React, { Component } from 'react';

import './Style.css';
import Sidebar from './Sidebar';






export default class InvitationCard extends Component {

  render(){
  
  return (
    <div>
        
        <React.StrictMode>
          <Sidebar/>
        </React.StrictMode>
        
        <div>
          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
              <h1 className="h2">Budget</h1>
            </div> 
          </main>
          <div className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <div className="mb-3 ">       
              
            </div>
          </div>
        </div>
      </div>
    );
}
}