import React, { useContext } from "react";
import { TransactionContext } from "../context/TransactionContext";

const IncomeExpenses = () => {

    const [transactions,setTransactions]=useContext(TransactionContext);

    let amount=transactions.map(transaction=>(transaction.amount))

    let income=0;
    let expense=0;

    amount.forEach(amount => {
        amount >=0 ? income+=parseFloat(amount) : expense+=(-amount)
     });
 

    return (
        <div className="inc-exp-container">
        <div>
          <h4>Income</h4>
          <p id="money-plus" className="money plus">
            +$ {income}
          </p>
        </div>
        <div>
          <h4>Expense</h4>
          <p id="money-minus" className="money minus">
            -$ {expense}
          </p>
        </div>
      </div>
    )

}

export default IncomeExpenses;