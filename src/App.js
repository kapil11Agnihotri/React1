import Expense from "./Components/Expense/Expense";

const App=()=> {
    const expenses = [
        {
          id: "e1",
          title: "Toilet Paper",
          amount: 94.12,
          date: new Date(2022, 10, 23),
          locationOfExpenditure: "Noida",
        },
        {
          id: "e2",
          title: "New TV",
          amount: 799.49,
          date: new Date(2022, 10, 20),
          locationOfExpenditure: "gr.Noida",
        },
        {
          id: "e3",
          title: "Car Insurance",
          amount: 294.67,
          date: new Date(2022, 9, 28),
          locationOfExpenditure: "delhi",
        },
        {
          id: "e4",
          title: "New Desk (Wooden)",
          amount: 450,
          date: new Date(2022, 10, 12),
          locationOfExpenditure: "grugram",
        },
      ];
    return (
        <>
           <Expense items={expenses}/>
        </>
    );
}
export default App;
