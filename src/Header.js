import React from 'react';
import logo from './expensemanager.png';
import './App.css';
function Header() {
  return (
    <div className="Header">
    <img className="logo" src={logo} alt="Expense tracker" width="110" height="110"></img>
    <h1 className="expense-header" >Expense Tracker</h1>
    </div>
  );
}

export default Header;