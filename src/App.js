import React from 'react';
import './App.css';
import Header from './Header.js';
import Balance from './Balance-component.js'
import Incexpcomponent from './Inc-exp-component.js'
import TransHistory from './Transaction-History.js'
import Addtransaction from './Add-transaction.js'
import {TransactionProvider} from './GlobalContext.js'
function App() {
  return (
    <TransactionProvider >
     <div className="MainContainer">
     <Header />
     <Balance />
     <Incexpcomponent />
     <TransHistory />
     <Addtransaction />
     </div>
    </TransactionProvider>

  );
}

export default App;
