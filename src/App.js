import { useState } from "react";
import Expenses from "~/components/Expenses/Expenses";
import NewExpense from "./components/Expenses/NewExpense/NewExpense";

const INIT_EXPENSE = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(1, 1, 2023),
  },
  // { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  // {
  //   id: "e3",
  //   title: "Car Insurance",
  //   amount: 294.67,
  //   date: new Date(2021, 2, 28),
  // },
  // {
  //   id: "e4",
  //   title: "New Desk (Wooden)",
  //   amount: 450,
  //   date: new Date(2023, 5, 12),
  // },
];

function App() {
  const dataLocalStorage = JSON.parse(localStorage.getItem("expenses"));
  const dataClean =
    dataLocalStorage &&
    dataLocalStorage.map((item, idx) => {
      const result = {
        id: item.id,
        title: item.title,
        amount: item.amount,
        date: new Date(item.date),
      };
      return result;
    }, []);
  // console.log(dataClean)
  const [expenses, setExpenses] = useState(dataClean ?? []);
  // console.log("local:", expenses);
  const addDataSubmitHandler = (expense) => {
    setExpenses((prevState) => [expense, ...prevState]);
  };

  return (
    <div className="App">
      <NewExpense onAddData={addDataSubmitHandler} />
      <Expenses data={expenses} />
    </div>
  );
}

export default App;
