import React, { useContext } from 'react'
import { TransactionContext } from '../context/TransactionContext'

export default function RemoveIncomeOrExpense(props) {

    const [transaction, setTransaction] = useContext(TransactionContext)

    function deleteTransaction(){
        setTransaction(transaction.filter(item=>item.id!==props.id))
    }
    
    return (
        <button className="delete-btn" onClick={deleteTransaction}>x</button>
    )
}
