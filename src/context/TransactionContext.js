import { createContext } from "react";

export const initialState = {
  transactions: [
    {
      id: Math.floor(Math.random() * 100000000),
      text: "Received",
      amount: 50,
    },
    {
      id: Math.floor(Math.random() * 100000000),
      text: "Milk",
      amount: -10,
    },
    {
      id: Math.floor(Math.random() * 100000000),
      text: "Bread",
      amount: -20,
    },
  ],
};

export const TransactionContext = createContext();
export const TransactionDispatchContext = createContext();
