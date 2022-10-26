import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const userEnteredData = (enteredExpense) => {
    const enteredData = {
      ...enteredExpense,
      id: Math.random().toString(),
    };
    props.onAddExpense(enteredData);
    setIsEditing(false);
  };
  const startEditingHandler = () => {
    setIsEditing(true);
  };
  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
      {isEditing && (
        <ExpenseForm
          onSubmitExpense={userEnteredData}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
};
export default NewExpense;
