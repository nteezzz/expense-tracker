import React, { useState } from "react";
import './addExpense.css'

export const AddExpense=({onSubmit})=>{
    const [title,setTitle]=useState('');
    const [amount,setAmount]=useState('');
    const [date,setDate]=useState(''); 
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title.trim() || !amount.trim() || !date.trim()) return;
        
        onSubmit({
          title,
          amount: parseFloat(amount),
          date
        });
    
        // Clear form fields
        setTitle('');
        setAmount('');
        setDate('');
      };

return(
    <div className="container">
        <form onSubmit={handleSubmit}>
        <div className="row">
        <div className="col">
            <label>Title:</label>
            <input type="text" 
            placeholder="Enter title"
            name="title"
            onChange={e=>setTitle(e.target.value)}
            value={title}
            required/>

        </div>
        <div className="col">
            <label>Amount:</label>
            <input type="number" 
            placeholder="Enter amount"
            name="amount"
            value={amount}
            onChange={e=>setAmount(e.target.value)}
            required
            />
        </div>
        <div className="col">
            <label>Date:</label>
            <input type="date" 
            name="date"
            value={date}
            onChange={e=>setDate(e.target.value)}
            required
            />
        </div>
        </div>
        <div className="row" id="second">
        <button className="button" type="submit">Add Expense</button>
        </div>
    </form>

    </div>
    

);
}