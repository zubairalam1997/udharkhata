import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { Routes, Route,} from 'react-router-dom';
import { useCustomerContext } from './context/CustomerContext';
import Login from './pages/Login';
import AddCustomer from './components/AddCustomer';
import LedgerHome from './components/LedgerHome';
import CustomerLedger from './components/CustomerLedger';
import AddTransaction from './pages/AddTransaction';

export default function App() {
  const [user, setUser] = useState(null);
  const { addCustomer } = useCustomerContext();

    const [transaction, setTransaction] = useState([]);
  

  return (
    <Routes>
      {/* {!user ? (
        
      ) : ( */}
        <>
        
        <Route path="/login" element={<Login onLogin={setUser} />} />
        <Route path="/" element={<LedgerHome />} />
          <Route path="/add-customer" element={<AddCustomer onAdd={addCustomer} />} />
          <Route path="/customer/:id" element={<CustomerLedger />} />
          <Route
  path="/customer/:id/add-transaction"
  element={<AddTransaction onAddTransaction={(transaction) => {
    // Add transaction logic here
    setTransaction(transaction)
  }} />}
/>
        </>
      {/* // )} */}
    </Routes>
  );
}
