import React, { useState } from "react";
import Expenses from "./components/Expenses";
import NewExpense from "./components/NewExpense";

const dummy_expenses = [
  {
    id: 1,
    title: "Ruby Masterclass",
    amount: 200,
    date: new Date("2021-03-12"),
  },
  { id: 2, title: "Staycation", amount: 550, date: new Date(2020, 2, 10) },
  {
    id: 3,
    title: "JavaScript course",
    amount: 150,
    date: new Date("2019-01-02"),
  },
  {
    id: 4,
    title: "Cruise to Nowhere",
    amount: 450,
    date: new Date("2021-02-01"),
  },
  {
    id: 5,
    title: "CISSP Training",
    amount: 1000,
    date: new Date("2021-01-10"),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(dummy_expenses);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
