import React, { useState } from 'react';
import './monthlyExpenseCard.css'
export const MonthlyExpenseCard = ({ month, total, expenses }) => {
  const [isHovered, setIsHovered] = useState(false);
  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
    ];

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div 
      className="monthly-expense-card" 
      onMouseEnter={handleMouseEnter} 
      onMouseLeave={handleMouseLeave}
    >
      <h3>{`${monthNames[month - 1]}`}</h3>
      <h4>${total}</h4>

      {isHovered && (
        <ul className='monthly-ul'>
          {expenses.map((expense, index) => (
            <li key={index}>
              {expense.title} - ${expense.amount.toFixed(2)}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

