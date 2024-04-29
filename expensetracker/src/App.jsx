import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import  {AddExpense}  from './components/addExpense.jsx'
import {ExpenseList} from './components/expenseList.jsx'
import { ExpenseChart } from './components/expenseChart.jsx'
import { MonthlyExpenseCard } from './components/monthlyExpenseCard.jsx'
import {MonthlyExpenseGraph} from './components/monthlyExpenseGraph.jsx'



function App() {
  const [expenses, setExpenses] = useState([]);
  const handleAddExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };
  const handleDeleteExpense = (index) => {
    const updatedExpenses = [...expenses];
    updatedExpenses.splice(index, 1);
    setExpenses(updatedExpenses);
  };
  const groupExpensesByMonth = () => {
    const expensesByMonth = {};
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
    return expensesByMonth;
  };

  return (
  <>
  <div className='heading'><h1>Expense Tracker</h1></div>
      <AddExpense onSubmit={handleAddExpense} />
  <div className='heading'><h2>Monthly expense</h2></div> 
  {/* <MonthlyExpenseGraph monthlyExpenses={groupExpensesByMonth()} /> */}

      <div className="monthly-expense-cards">
        {Object.keys(groupExpensesByMonth()).map(month => (
          <MonthlyExpenseCard 
            key={month} 
            month={month} 
            total={groupExpensesByMonth()[month].total}
            expenses={groupExpensesByMonth()[month].expenses} 
          />
        ))}
      </div>
  <div className='heading'><h2>History</h2></div>
      <ExpenseList expenses={expenses} onDelete={handleDeleteExpense} />
  
  </>
  );
}

export default App
