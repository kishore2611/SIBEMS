import React, { Component } from "react";

// import "./Style.css";
import "./Budget.css";
import Sidebar from "./Sidebar";
// import Header from "./Components/Header";
import Balance from "./Components/Balance";
import IncomeList from "./Components/IncomeList";
import ExpenseList from "./Components/ExpenseList";
import AddTransaction from "./Components/AddTransaction";
import { GlobalContextProvider } from "./Components/Context/GlobalState";


export default class Budget extends Component {
  render() {
    return (
      <div>
        <React.StrictMode>
          <Sidebar />
        </React.StrictMode>

        <div>
          <GlobalContextProvider>
            <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4 appfontsize" >
              <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 className="h2">Budget App</h1>
              </div>
              <div className="budgetContainer" style={{fontSize: "20px"}}>
                <div className="budgetapp-wrapper">
                  {/* <Header /> */}
                  <Balance />
                  <IncomeList />
                  <ExpenseList />
                  <AddTransaction />
                </div>
              </div>
            </main>
          </GlobalContextProvider>
        </div>
      </div>
    );
  }
}
