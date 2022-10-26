import React,{useState} from "react";
import Expense from "./Components/Expense/Expense";
import NewExpense from "./Components/NewExpense/NewExpense";


const DummyExpenses = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2022, 10, 23),
    
  },
  {
    id: "e2",
    title: "New TV",
    amount: 799.49,
    date: new Date(2022, 10, 20),
   
  },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2022, 9, 28),
    
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2022, 10, 12),
   
  },
];

const App=()=> {
   
  const [expenses,setExpences]=useState(DummyExpenses)

      const expenceHandler=expense=>{
       setExpences((prevExpenses)=>{
        return [expense,...prevExpenses]
       })
      }
      console.log(expenses)
    return (
        <>
           <NewExpense onAddExpense={expenceHandler} />
           <Expense items={expenses}/>
        </>
    );
}
export default App;
