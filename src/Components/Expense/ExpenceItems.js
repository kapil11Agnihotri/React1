import React,{ useState } from 'react'


import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenceItems.css";

const ExpenceItems = (props) => {
  const [title,setTitle]=useState(props.title)
  const [amount,setAmount]=useState(props.amount)

  const clickHandler1=()=>{
    setTitle('Updated')
    console.log(title)
    
  }
  const clickHandler2=()=>{
    
    setAmount('100')
    console.log(amount)
  }
 
  return (
    <Card>
    < div className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${amount}</div>
      </div>
      <button onClick={clickHandler1}>Change Title</button>
      <button onClick={clickHandler2}>Change amount</button>
    </div>
    </Card>
  );
};
export default ExpenceItems;
