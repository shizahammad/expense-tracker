import React,{useContext} from 'react';
import  {GlobalContext} from './GlobalContext.js'
import './App.css';

function Transaction({transaction}) {
  const {DeleteTransaction} = useContext(GlobalContext);
  const sign = transaction.amount < 0 ? '-' : '+';
  return (
       <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
       <div className="single-list-item"><span >{transaction.text}</span>  <span >{sign}${Math.abs(transaction.amount)} <button onClick={() => DeleteTransaction(transaction.id)} className="del-button">Delete</button></span></div> 
       </li>
  
  );
}

export default Transaction;