import React,{useState} from 'react';
import { Bar } from 'react-chartjs-2';
import './expenseChart.css'

export const ExpenseChart = ({ expenses }) => {
const expensesByMonth = {};
const monthNames = [
"January", "February", "March", "April", "May", "June",
"July", "August", "September", "October", "November", "December"
];
const [showDetails, setShowDetails] = useState(false);
  const handleToggleDetails = () => {
    setShowDetails(!showDetails);
  };

expenses.forEach(expense => {
const month = expense.date.split('-')[1];
if (!expensesByMonth[month]) {
expensesByMonth[month] = {
total: 0,
expenses: [],
};
}
expensesByMonth[month].total += expense.amount;
expensesByMonth[month].expenses.push(expense);
});
console.log(expensesByMonth);
return (
<div>
<div className='header-container'> 
<div className='heading'><h2>Monthly expense</h2></div> 
</div>    
    <div className='monthly-expense-container' >
    {Object.keys(expensesByMonth).map(month => (
    <div className='monthly-container' key={month}>
        <h3>{`${monthNames[month - 1]}`}</h3>
        <p>${expensesByMonth[month].total.toFixed(2)}</p>
        <button onClick={handleToggleDetails}>{showDetails ? 'Hide Details' : 'More Details'}</button>  
        {showDetails && (
            <ul className='monthly-ul'>
            {expensesByMonth[month].expenses.map((expense, index) => (
            <li key={index}>
            <div className='monthly-item'>
            <div className="date-col-2">{expense.date}-</div>
            <div className="title-col-2">{expense.title}-</div>
            <div className="amount-col-2">${expense.amount.toFixed(2)}</div>
            </div>  
            </li>
            ))}
        </ul>
        )} 
    </div>
    ))}
    </div>
</div>
);
};