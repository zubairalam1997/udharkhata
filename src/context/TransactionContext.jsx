// TransactionContext.js
import React, { createContext, useState, useContext } from 'react';

const TransactionContext = createContext();

export const useTransactionContext = () => {
  const context = useContext(TransactionContext);
  if (!context) {
    throw new Error('useTransactionContext must be used within a TransactionProvider');
  }
  return context;
};

export const TransactionProvider = ({ children }) => {
  const [transactions, setTransactions] = useState([]);
  
    const addTransaction = (transaction) => {
      setTransactions((prev) => [...prev, transaction]);
    };
  
    // Helper: get totals for a specific customer
    const getCustomerTotals = (customerId) => {
      const customerTransactions = transactions.filter(t => t.customerId === customerId);
  
      const totalGiven = customerTransactions
        .filter(t => t.amount > 0)
        .reduce((sum, t) => sum + t.amount, 0);
  
      const totalReceived = customerTransactions
        .filter(t => t.amount < 0)
        .reduce((sum, t) => sum + Math.abs(t.amount), 0);
  
      const balance = totalGiven - totalReceived;
      console.log("balance", Math.abs(balance))
  
      return { totalGiven, totalReceived, balance };
    };
  
  

 

  return (
    <TransactionContext.Provider value={{ transactions, addTransaction, getCustomerTotals }}>
      {children}
    </TransactionContext.Provider>
  );
};

