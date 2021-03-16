import React, { useReducer, createContext } from 'react'

import { contextReducer } from './contextReducer'

const initialState = JSON.parse(localStorage.getItem('transactions')) || [{ amount: 1212, category: "Savings", type: "Income", date: "2021-02-23", id: "be61777b-67dd-4d53-be54-a02163c8b82d" }];

export const ExpenseTrackerContext = createContext(initialState);

export const Provider = ({ children }) => {
    const [transactions, dispatch] = useReducer(contextReducer, initialState)

    const deleteTransactions = id => dispatch({ type: 'DELETE_TRANSACTIONS', payload: id });
    const addTransactions = transaction => dispatch({ type: 'ADD_TRANSACTIONS', payload: transaction });

    const balance = transactions.reduce((acc, currVal) => acc.type === 'Expense' ? acc - currVal.amount : acc + currVal.amount, 0)

    return (
        <ExpenseTrackerContext.Provider value={{
            deleteTransactions,
            addTransactions,
            transactions,
            balance
        }}>
            {children}
        </ExpenseTrackerContext.Provider>
    )
}
