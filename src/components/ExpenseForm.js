import React, { useState } from "react";
import "./css/ExpenseForm.css";

const ExpenseForm = (props) => {
  const [itemTitle, setItemTitle] = useState("");
  const [itemAmount, setItemAmount] = useState("");
  const [itemDate, setItemDate] = useState("");

  const titleChangeHandler = (e) => {
    setItemTitle(e.target.value);
  };

  const amountChangeHandler = (e) => {
    setItemAmount(e.target.value);
  };

  const dateChangeHandler = (e) => {
    setItemDate(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const expenseItem = {
      title: itemTitle,
      amount: +itemAmount,
      date: new Date(itemDate),
    };
    props.onSaveNewExpense(expenseItem);
    setItemTitle("");
    setItemAmount("");
    setItemDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Item Name</label>
          <input type="text" value={itemTitle} onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Cost</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={itemAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" value={itemDate} onChange={dateChangeHandler} />
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
          <button onClick={props.onCancel}>Cancel</button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
