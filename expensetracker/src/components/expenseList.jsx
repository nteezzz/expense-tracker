import React from "react";
import './expenseList.css'

export const ExpenseList = ({ expenses,  onDelete  }) => {
    const handleDelete = (index) => {
        onDelete(index);
      };

  return (
      <ul>
        {expenses.map((expense, index) => (
        <div className="expense-container">
          <li key={index}>
          <div className="inner-container">
            <div className="date-col">{expense.date}</div>
            <div className="title-col">{expense.title}</div>
            <div className="amount-col">${expense.amount.toFixed(2)}</div>
            <div>
            <button className="button" onClick={() => handleDelete(index)}>delete</button>
            </div>
          </div>
          </li>
          </div>
        ))}
        
      </ul>
    
  );
};
