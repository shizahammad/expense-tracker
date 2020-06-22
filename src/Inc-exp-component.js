import React,{useContext} from 'react';
import './App.css';
import  {GlobalContext} from './GlobalContext.js'
function Incexpcomponent() {
  const {transactions} = useContext(GlobalContext);
  const amounts = transactions.map(transaction => transaction.amount);
  const income = amounts.filter(item => item > 0).reduce((acc, item) => (acc += item), 0).toFixed(2);
  const expense = (amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0)*-1).toFixed(2);

  return (
    <div className="Income-expense" >
     <h5>Income <br /> {income}</h5>
     <h5>Expense<br />{expense}</h5>
    </div>
  );
}

export default Incexpcomponent;