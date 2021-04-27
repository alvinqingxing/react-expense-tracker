import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./css/NewExpense.css";

const NewExpense = (props) => {
  const [addNewExpense, setAddNewExpense] = useState(false);

  const startAddingHandler = () => {
    setAddNewExpense(true);
  };

  const stopAddingHandler = () => {
    setAddNewExpense(false);
  };

  const saveNewExpenseHandler = (newExpenseData) => {
    const newExpenseItem = {
      ...newExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(newExpenseItem);
    setAddNewExpense(false);
  };

  return (
    <div className="new-expense">
      {!addNewExpense && (
        <button onClick={startAddingHandler}>Add New Expense</button>
      )}
      {addNewExpense && (
        <ExpenseForm
          onSaveNewExpense={saveNewExpenseHandler}
          onCancel={stopAddingHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
