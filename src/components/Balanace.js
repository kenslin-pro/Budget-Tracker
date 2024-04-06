import React, { useContext } from "react";
import { TransactionContext } from "../context/TransactionContext";


const Balance = ()=>{

    const [transactions]=useContext(TransactionContext);

    let amount=transactions.map(transaction=>(transaction.amount))

    let income=0;
    let expense=0;

    amount.forEach(amount => {
       amount >=0 ? income+=parseFloat(amount) : expense+=(-amount)
    });
 
    let balance=income-expense

    return (
        <h2>
            Your Balance is {balance}
        </h2>
    )


}

export default Balance;