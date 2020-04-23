import React, { useContext } from "react";
import InCome from './Income'
import { GlobalContext } from "../context/GlobalState";

const IncomeList = () => {
  const { incomeTransactions } = useContext(GlobalContext);
  return (
    <div className="transactions transactions-income">
      <h2>Transation History</h2>
      <ul className="transaction-list">
        {incomeTransactions.map((incomeTransaction) => (
         <InCome key={incomeTransaction.id} incomeTransaction={incomeTransaction} />
        ))}
      </ul>
    </div>
  );
};

export default IncomeList;
