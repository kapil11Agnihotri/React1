import ExpenceItems from "./ExpenceItems";
import Card from "../UI/Card";
import "./Expense.css";

const Expense=(props)=> {
  
  return (
    <Card>
    <div className="expenses">
        <ExpenceItems
          title={props.items[0].title}
          amount={props.items[0].amount}
          date={props.items[0].date}
          locationOfExpenditure={props.items[0].locationOfExpenditure}
        />
        <ExpenceItems
          title={props.items[1].title}
          amount={props.items[1].amount}
          date={props.items[1].date}
          locationOfExpenditure={props.items[1].locationOfExpenditure}
        />
        <ExpenceItems
          title={props.items[2].title}
          amount={props.items[2].amount}
          date={props.items[2].date}
          locationOfExpenditure={props.items[2].locationOfExpenditure}
        />
        <ExpenceItems
          title={props.items[3].title}
          amount={props.items[3].amount}
          date={props.items[3].date}
          locationOfExpenditure={props.items[3].locationOfExpenditure}
        />
    </div>
    </Card>
  )
}
export default Expense;
