import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenceItems.css";

const ExpenceItems = (props) => {
  const clickHandler=()=>{
    console.log('clicked')
  }
  const deleteExpense=()=>{
    console.log('delete')
  }

  return (
    <Card>
    < div className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
      <button onClick={deleteExpense}>Delete</button>
    </div>
    </Card>
  );
};
export default ExpenceItems;
