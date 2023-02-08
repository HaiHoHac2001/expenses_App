import Card from "~/components/UI/Card";
import ExpenseItem from "~/components/Expenses/ExpenseItem";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
import ExpensesList from "./ExpensesList";

function Expenses({ data }) {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = data.filter(
    (expense) => expense.date.getFullYear().toString() === filteredYear
  );


  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      {/* {expensesContent} */}
      <ExpensesList filteredExpenses={filteredExpenses}/>
    </Card>
  );
}

export default Expenses;
