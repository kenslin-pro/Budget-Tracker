import React, { useContext } from "react";
import RemoveIncomeOrExpense from "./RemoveIncomeOrExpense";
import { TransactionContext } from "../context/TransactionContext";

export default function TransactionList() {

    const [transactions, setTransactions] = useContext(TransactionContext);

  return (
    <ul id="list" className="list">
      {transactions.map((transaction) => (
        <li className={transaction.amount >=0 ? "plus": "minus"} key={transaction.id}>
          {transaction.description}
          <span>{transaction.amount}</span>
          <RemoveIncomeOrExpense id={transaction.id} />
        </li>
      ))}
    </ul>
  );
}
