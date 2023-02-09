import { useState } from "react";
import Expenses from "~/components/Expenses/Expenses";
import NewExpense from "./components/Expenses/NewExpense/NewExpense";

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
