import React from "react";
import ExpenceItems from "./ExpenceItems";
import './ExpensesList.css'
const ExpenseList=(props)=>{

    if(props.items.length === 0){
     return <h2 className="expenses-list__fallback">No Expenses Found</h2>
    }

    if(props.items.length===1){
        return <>
        <ul className="expenses-list">
        {props.items.map((expense) => (
        <ExpenceItems
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
   </ul>  
   <p className="expenses-list__fallback">Only single Expense here. Please add more...</p>
        </>
    }
   return <ul className="expenses-list">
        {props.items.map((expense) => (
        <ExpenceItems
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
   </ul>  
}
export default ExpenseList;