import React, { useState } from "react";
import ExpenceItems from "./ExpenceItems";
import Card from "../UI/Card";
import "./Expense.css";
import ExpensesFilter from "./ExpenseFilter";

const Expense = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <>
      <Card>
        <div className="expenses">
          <ExpensesFilter
            selected={filteredYear}
            onChangeFilter={filterChangeHandler}
          />
          {filteredExpenses.length === 0 ? (
            <p>No Expenses Found</p>
          ) : (
            filteredExpenses.map((expense) => (
              <ExpenceItems
                key={expense.id}
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
              />
            ))
          )}
        </div>
      </Card>
    </>
  );
};
export default Expense;
