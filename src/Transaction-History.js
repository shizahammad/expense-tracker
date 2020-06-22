import React, {useContext} from 'react';
import './App.css';
import  {GlobalContext} from './GlobalContext.js'
import Transaction  from './transaction.js'
function TransHistory() {

  const {transactions} = useContext(GlobalContext);

  return (
    <div className="trans-history" >
     <h5 className="trans-h">Transaction History</h5>
     <hr />
     <ul className="trans-list">
       {transactions.map(transaction => ( 
      <Transaction key={transaction.id} transaction={transaction}/>
      ))}
    
     </ul>
     

    </div>
  );
}

export default TransHistory;