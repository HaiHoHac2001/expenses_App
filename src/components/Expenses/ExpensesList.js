import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

function ExpensesList(props) {
  if (props.filteredExpenses.length === 0) {
    return <h2 className="expenses-list__fallback">No expenses found.</h2>;
  }
  return (
    <ul className="expenses-list">
      {props.filteredExpenses.map((item, id) => (
        <ExpenseItem key={id} data={item} />
      ))}
    </ul>
  );
}

export default ExpensesList;
