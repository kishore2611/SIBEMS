import React, { useContext } from "react";
import { GlobalContext } from "./Context/GlobalState";

const IncomeTransaction = ({ incomeTransaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);

  return (
    <li className="budgettransaction">
      <span className="budgettransaction-text">{incomeTransaction.incomeText}</span>
      <span className="budgettransaction-amount">
        ${incomeTransaction.incomeAmount}
      </span>
      <button
        onClick={() => deleteTransaction(incomeTransaction.id)}
        className="budgetdelete-btn"
      >
        <i className="bi bi-trash"></i>
      </button>
    </li>
  );
};

export default IncomeTransaction;
