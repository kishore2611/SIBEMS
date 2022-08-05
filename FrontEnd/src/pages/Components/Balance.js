import React, { useContext } from "react";
import { GlobalContext } from "./Context/GlobalState";

const Balance = () => {
  const { incomeTransactions, expenseTransactions } = useContext(GlobalContext);

  const incomeAmounts = incomeTransactions.map(
    incomeTransaction => incomeTransaction.incomeAmount
  );

  const expenseAmounts = expenseTransactions.map(
    expenseTransaction => expenseTransaction.expenseAmount
  );

  const totalIncome = incomeAmounts
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const totalExpenses = expenseAmounts
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  return (
    <div className="budgetbalance">
      <h2>Your Balance</h2>
      <h3>${(totalIncome - totalExpenses).toFixed(2)}</h3>
      <div className="budgetincome-expense">
        <div className="budgetplus">
          <h3>Income</h3>
          <p>+${totalIncome}</p>
        </div>
        <div className="budgetminus">
          <h3>Expenses</h3>
          <p>-${totalExpenses}</p>
        </div>
      </div>
    </div>
  );
};

export default Balance;
