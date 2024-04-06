import React, { useContext, useState } from "react";
import { TransactionContext } from "../context/TransactionContext";

export default function AddTransaction(){

    const [transactions,setTransactions]=useContext(TransactionContext)

    const [text, setText]=useState("");
    const [amount, setAmount]=useState(0);

   


  
    const handleFomrSubmit=(e)=>{
        e.preventDefault();

        let newTransaction={
            id: Math.floor(Math.random()*100),
            description: text,
            amount: amount
        }

        setTransactions([...transactions,newTransaction])
        

    }

    return (
        <div>
          <h3>Add new transaction</h3>
          <form id="form" onSubmit={handleFomrSubmit}>
            <div className="form-control">
              <label htmlFor="text">Text</label>
              <input
                type="text"
                value={text}
                onChange={
                    (e)=>{
                        setText(e.target.value)
                    }
                }
                id="text"
                placeholder="Enter text..."
              />
              {/* <div className="error"></div> */}
            </div>
            <div className="form-control">
              <label htmlFor="amount">
                Amount <br />
                (negative - expense, positive - income)
              </label>
              <input
                type="number"
                id="amount"
                value={amount}
                onChange={
                    (e)=>{
                        setAmount(e.target.value)
                    }
                }
                
                placeholder="Enter amount..."
              />
              {/* <div className="error">""</div> */}
            </div>
            <button type="submit" className="btn">
              Add transaction
            </button>
          </form>
        </div>
      );

}