import React, { useContext } from "react";
import Expense from "./Expense";
import { GlobalContext } from "../context/GlobalState";

const ExpenseList = () => {
  const { expenseTransactions } = useContext(GlobalContext);
  return (
    <div className="transactions transactions-expense">
      <h2>Transation History</h2>
      <ul className="transaction-list">
        {expenseTransactions.map((expenseTransaction) => (
          <Expense
            key={expenseTransaction.id}
            expenseTransaction={expenseTransaction}
          />
        ))}
      </ul>
    </div>
  );
};

export default ExpenseList;
