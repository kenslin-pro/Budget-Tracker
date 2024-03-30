import { ADD, DELETE } from "./transactionConstants";

export const addTransactionAction = (payload) => {
  return {
    type: ADD,
    payload: payload,
  };
};

export const deleteTransactionAction = (payload) => {
  return {
    type: DELETE,
    payload: payload,
  };
};
