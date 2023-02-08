import { useState } from "react";
import Card from "~/components/UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

function ExpenseItem({data}) {
  // const [title, setTitle] = useState(data.title)

  return (
    <li>
      <Card className="expense-item">
          <ExpenseDate date={data.date}/>
          <div className="expense-item__description">
            <h2>{data.title}</h2>
            <div className="expense-item__price">${data.amount}</div>
          </div>
      </Card>
    </li>
  )
}

export default ExpenseItem;
