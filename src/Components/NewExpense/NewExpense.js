import React from "react";
import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";

const NewExpense=(props)=>{
   const userEnteredData=(enteredExpense)=>{
    const enteredData={
        ...enteredExpense,
        id:Math.random().toString()
    }
    props.onAddExpense(enteredData);
   }

    return (
        <div className="new-expense">
            <ExpenseForm onSubmitExpense={userEnteredData} /> 
        </div>
    )    
}
export default NewExpense;