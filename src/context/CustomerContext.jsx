import React, { createContext, useState, useContext } from 'react';

// Create the context
const CustomerContext = createContext();

// Custom hook to use the CustomerContext
export const useCustomerContext = () => {
  const context = useContext(CustomerContext);
  if (!context) {
    throw new Error('useCustomerContext must be used within a CustomerProvider');
  }
  return context;
};

// Create a provider component
export const CustomerProvider = ({ children }) => {
  const [customers, setCustomers] = useState([]);

  const addCustomer = (customer) => {
    setCustomers((prevCustomers) => [...prevCustomers, customer]);
  };

  return (
    <CustomerContext.Provider value={{ customers, addCustomer }}>
      {children}
    </CustomerContext.Provider>
  );
};