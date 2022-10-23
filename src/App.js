import ExpenceItems from "./Components/ExpenceItems";

function App() {
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
      locationOfExpenditure: 'delhi',
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2022, 10, 12),
      locationOfExpenditure: 'grugram',
    },
  ];
  return (
    <>
      <ExpenceItems
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
        locationOfExpenditure={expenses[0].locationOfExpenditure}
      ></ExpenceItems>
      <ExpenceItems
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
        locationOfExpenditure={expenses[1].locationOfExpenditure}
      ></ExpenceItems>
      <ExpenceItems
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
        locationOfExpenditure={expenses[2].locationOfExpenditure}
      ></ExpenceItems>
      <ExpenceItems
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
        locationOfExpenditure={expenses[3].locationOfExpenditure}
      ></ExpenceItems>
    </>
  );
}
export default App;
