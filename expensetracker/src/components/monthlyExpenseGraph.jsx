import React from 'react';
import { Line } from 'react-chartjs-2';

export const MonthlyExpenseGraph = ({ monthlyExpenses }) => {
  // Extracting month numbers and corresponding expenses
  const months = Object.keys(monthlyExpenses);
  const expenses = months.map(month => monthlyExpenses[month].total);

  // Data for Chart.js
  const data = {
    labels: months,
    datasets: [
      {
        label: 'Monthly Expenses',
        data: expenses,
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  // Options for Chart.js
  const options = {
    scales: {
      x: {
        type: 'category',
        labels: months,
      },
    },
  };

  return (
    <div>
      <h2>Monthly Expenses Graph</h2>
      <Line data={data} options={options} />
    </div>
  );
};


