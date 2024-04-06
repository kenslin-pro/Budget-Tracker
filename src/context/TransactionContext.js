import React, { createContext, useState } from "react";

export const TransactionContext = createContext();

export const TransactionProvider = (props) => {

    const [transactions, setTransactions] = useState([
        {
          id: 1,
          description: "Salary",
          amount: 300,
        },
        {
          id: 2,
          description: "Salary",
          amount: 300,
        },
        {
          id: 3,
          description: "Bank Loan",
          amount: -300,
        },
      ]);

  return (
    <TransactionContext.Provider value={[transactions,setTransactions]}>
      {props.children}
    </TransactionContext.Provider>
  );
};
