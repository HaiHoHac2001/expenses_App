import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

function NewExpense(props) {
  const [isEditing, setIsEditing] = useState(false);
  const [pushExpenseData, setPushExpenseData] = useState([]);

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const saveExpenseDataHandler = (enteredHandleSubmit) => {
    const dataSubmitForm = {
      ...enteredHandleSubmit,
      id: Math.random().toString(),
    };
    props.onAddData(dataSubmitForm);

    // save localStorage
    setPushExpenseData((prev) => {
      const data = [...prev, dataSubmitForm];
      localStorage.setItem("expenses", JSON.stringify(data));

      return data;
    });
  };

  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
      {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />}
    </div>
  );
}

export default NewExpense;
