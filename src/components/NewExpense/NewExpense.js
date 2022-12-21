import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [isEdeting, setIsEditing] = useState(false);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setIsEditing(false);
  };
  const startIsEditingHandler = () => {
    setIsEditing(true);
  };

  const stopIsEditingHandler = () => {
    setIsEditing(false);
  };
  return (
    <div className="new-expense">
      {!isEdeting && (
        <button onClick={startIsEditingHandler}>Add Expense</button>
      )}
      {isEdeting && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopIsEditingHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
