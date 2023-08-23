import Expenses from "./components/Expenses/Expenses";
import "./App.css";

function App() {
  const expenses = [
    {
      id: "1",
      Title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "2", Title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      // id: "3",
      Title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 3, 28),
    },
    {
      // id: "4",
      Title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];
  return <Expenses items={expenses} />;
}

export default App;
