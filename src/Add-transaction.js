import React, {useState,useContext} from 'react';
import './App.css';
import  {GlobalContext} from './GlobalContext.js'
function Addtransaction() {
  let [text,setText]= useState('');
  let [amount,setAmount]= useState(0);
  const {AddTransaction} = useContext(GlobalContext);
  const onSubmit = e => {
    e.preventDefault();
    const newTransaction = {
      id: Math.floor(Math.random()*1000000000000),
      text,
      amount: +amount
    }
    AddTransaction(newTransaction)
  }
  return (
      <div>
      <h5 className="add-trans">Add transaction</h5>
      <hr />
      <form onSubmit={onSubmit} >
    <div className="trans-form" >
     <label >Description</label>
     <br />
     <input type="text" value={text} onChange={(e) => setText(e.target.value)}  placeholder="Enter description" required></input>
     <br />
     <label>Amount<br />
     (negative - expense, positive - income)</label>
     <br />
     <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount" required></input>
    </div>
    <button className="trans-button"><span className="span-trans">Add Transaction</span></button>
    </form>
    </div>
  );
}

export default Addtransaction;