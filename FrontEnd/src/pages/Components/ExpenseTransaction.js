import React, { useContext } from "react";
import { GlobalContext } from "./Context/GlobalState";

const ExpenseTransaction = ({ expenseTransaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);

  return (
    <li className="budgettransaction">
      <span className="budgettransaction-text">{expenseTransaction.expenseText}</span>
      <span className="budgettransaction-amount">
        ${expenseTransaction.expenseAmount}
      </span>
      <button
        onClick={() => deleteTransaction(expenseTransaction.id)}
        className="budgetdelete-btn"
      >
        <i className="bi bi-trash"></i>
      </button>
    </li>
  );
};

export default ExpenseTransaction;
