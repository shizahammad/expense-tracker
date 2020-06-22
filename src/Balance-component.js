import React, {useContext} from 'react';
import  {GlobalContext} from './GlobalContext.js'
import './App.css';

function Balance() {

  const {transactions} = useContext(GlobalContext);
  const amounts = transactions.map(transaction => transaction.amount);
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
  return (
    <div className="balance-component" >
     <h5>CURRENT BALANCE</h5>
     <h2>${total}</h2>
    </div>
  );
}

export default Balance;