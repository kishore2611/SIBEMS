import React, { Component } from 'react';

import './Style.css';
import Sidebar from './Sidebar';






export default class BudgetForm extends Component {

  render(){
  
  return (
    <div>
        
        <React.StrictMode>
          <Sidebar/>
        </React.StrictMode>
        
        <div>
          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
              <h1 className="h2">BudgetForm</h1>
            </div> 
          </main>
          <div className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <div className="mb-3 ">
              <select className="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                <option defaultValue>Open this select menu</option>
                <option defaultValue>Birthday Party</option>
                <option defaultValue>Marriage Function</option>
                <option defaultValue>Gathering</option>
                <option defaultValue>Kitty Party</option>
                <option defaultValue>Bachelors Party</option>
                <option defaultValue>Anniversary</option>
                <option defaultValue>Other</option>
              </select>
              <p className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 border-bottom mb-3">
                Which type of food do you want just check the items to get your Budget
              </p>
              <div className="row px-3">
                <div className="col-lg-3 mb-3 form-check">
                  <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                  <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div>
                <div className="col-lg-3 mb-3 form-check">
                  <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                  <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div>
                <div className="col-lg-3 mb-3 form-check">
                  <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                  <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div>
                <div className="col-lg-3 mb-3 form-check">
                  <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                  <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div>
                <div className="col-lg-3 mb-3 form-check">
                  <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                  <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div>
                <div className="col-lg-3 mb-3 form-check">
                  <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                  <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div>
                <div className="col-lg-3 mb-3 form-check">
                  <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                  <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div>
                <div className="col-lg-3 mb-3 form-check">
                  <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                  <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div>
              </div>
              <p className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 border-bottom mb-3">
                How many days do you want our service just click to get your Budget
              </p>
              <div className="row px-3">
                <div className="col-lg-3 mb-3 form-check">
                  <input type="radio" name="radios" className="form-check-input" id="exampleRadio2"/>
                  <label className="form-check-label" htmlFor="exampleRadio2">1 Day</label>
                </div>
                <div className="col-lg-3 mb-3 form-check">
                  <input type="radio" name="radios" className="form-check-input" id="exampleRadio2"/>
                  <label className="form-check-label" htmlFor="exampleRadio2">1 Day & 1 Night</label>
                </div>
                <div className="col-lg-3 mb-3 form-check">
                  <input type="radio" name="radios" className="form-check-input" id="exampleRadio2"/>
                  <label className="form-check-label" htmlFor="exampleRadio2">2 Days $ 1 Night</label>
                </div>
                <div className="col-lg-3 mb-3 form-check">
                  <input type="radio" name="radios" className="form-check-input" id="exampleRadio2"/>
                  <label className="form-check-label" htmlFor="exampleRadio2">3 Days & 3 Nights</label>
                </div>
                <div className="col-lg-3 mb-3 form-check">
                  <input type="radio" name="radios" className="form-check-input" id="exampleRadio2"/>
                  <label className="form-check-label" htmlFor="exampleRadio2">5 Days & 4 Nights</label>
                </div>
                <div className="col-lg-3 mb-3 form-check">
                  <input type="radio" name="radios" className="form-check-input" id="exampleRadio2"/>
                  <label className="form-check-label" htmlFor="exampleRadio2">7 Days & 6 Nights</label>
                </div>
                <div className="col-lg-3 mb-3 form-check">
                  <input type="radio" name="radios" className="form-check-input" id="exampleRadio2"/>
                  <label className="form-check-label" htmlFor="exampleRadio2">7 Days & 7 Nights</label>
                </div>
              </div>
              <p className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 border-bottom mb-3">
                Which type of Flowers & Smell do you like just check the items to get your Budget
              </p>
              <div className="row px-3">
                <div className="col-lg-3 mb-3 form-check">
                  <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                  <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div>
                <div className="col-lg-3 mb-3 form-check">
                  <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                  <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div>
                <div className="col-lg-3 mb-3 form-check">
                  <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                  <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div>
                <div className="col-lg-3 mb-3 form-check">
                  <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                  <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div>
                <div className="col-lg-3 mb-3 form-check">
                  <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                  <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div>
                <div className="col-lg-3 mb-3 form-check">
                  <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                  <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div>
                <div className="col-lg-3 mb-3 form-check">
                  <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                  <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div>
                <div className="col-lg-3 mb-3 form-check">
                  <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                  <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div>
              </div>
              <p className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 border-bottom mb-3">
                You Like to decorate Your place or we decorate our place (with Charge) to get your Budget
              </p>
              <div className="row px-3">
                <div className="col-lg-3 mb-3 form-check">
                  <input type="radio" name="radios" className="form-check-input" id="exampleRadio2"/>
                  <label className="form-check-label" htmlFor="exampleRadio2">Yours</label>
                </div>
                <div className="col-lg-3 mb-3 form-check">
                  <input type="radio" name="radios" className="form-check-input" id="exampleRadio2"/>
                  <label className="form-check-label" htmlFor="exampleRadio2">Ours</label>
                </div>
              </div>
              <div className="px-3">
              <button
                //   type="submit"
                className="btn btn-success btn-block text-left"
              >
                submit
              </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}
}