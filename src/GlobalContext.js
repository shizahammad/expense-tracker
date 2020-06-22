import React, { createContext, useReducer } from "react";
import TransactionReducer from './transReducer';

const initialTransactions={
transactions: []
}
export const GlobalContext = createContext(initialTransactions);
export const TransactionProvider = ({children})=> {
    let [state, dispatch] = useReducer(TransactionReducer, initialTransactions);
    function DeleteTransaction(id){
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        });
    }
    function AddTransaction(transaction){
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        });
    }
    return(
        <GlobalContext.Provider value={{
            transactions : state.transactions,
            DeleteTransaction,
            AddTransaction
        }}>
            {children}
        </GlobalContext.Provider>
    );
    }
