import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpenseItems.css";
import Card from "../component/Card/Card";
// import NewExpense from "./NewExpense/NewExpense";
import ExpenseFilter from "../component/ExpenseFilter/ExpenseFilter";
function ExpenseItems(props) {
  //   let expenseList = props.expenses.map((expense) => {
  //     <ExpenseItem
  //       title={expense.title}
  //       amount={expense.amount}
  //       date={expense.date}
  //     />;
  //   });

  const [year, setYear] = useState("");
  const savedYearHandler = (savedYear) => {
    console.log(savedYear);
    setYear(savedYear);
  };

  return (
    <div>
      <ExpenseFilter onSaveYr={savedYearHandler} />
      <Card className="expenses">
        {/* <NewExpense /> */}
        <ExpenseItem
          title={props.expenses[0].title}
          amount={props.expenses[0].amount}
          date={props.expenses[0].date}
        ></ExpenseItem>
        <ExpenseItem
          title={props.expenses[1].title}
          amount={props.expenses[1].amount}
          date={props.expenses[1].date}
        ></ExpenseItem>
        <ExpenseItem
          title={props.expenses[2].title}
          amount={props.expenses[2].amount}
          date={props.expenses[2].date}
        ></ExpenseItem>
        <ExpenseItem
          title={props.expenses[3].title}
          amount={props.expenses[3].amount}
          date={props.expenses[3].date}
        ></ExpenseItem>
      </Card>
    </div>
  );
}

export default ExpenseItems;
