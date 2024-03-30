import React, { useReducer } from "react";
import { Balance } from "./components/Balance";
import { IncomeExpenses } from "./components/IncomeExpenses";
import { TransactionList } from "./components/TransactionList";
import { AddTransaction } from "./components/AddTransaction";

import "./App.css";
import {
  TransactionContext,
  TransactionDispatchContext,
  initialState,
} from "./context/TransactionContext";
import { transactionReducer } from "./context/transactionReducer";

function App() {
  const [appState, dispatch] = useReducer(transactionReducer, initialState);

  return (
    <TransactionContext.Provider value={appState}>
      <TransactionDispatchContext.Provider value={dispatch}>
        <div className="container">
          <Balance />
          <IncomeExpenses />
          <TransactionList />
          <AddTransaction />
        </div>
      </TransactionDispatchContext.Provider>
    </TransactionContext.Provider>
  );
}

export default App;
