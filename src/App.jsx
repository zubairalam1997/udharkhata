import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import AddCustomer from './components/AddCustomer';
import LedgerHome from './components/LedgerHome';
import CustomerLedger from './components/CustomerLedger';

export default function App() {
  const [user, setUser] = useState(null);
  const [customers, setCustomers] = useState([]);

  const onAdd = (customer) => {
    setCustomers([...customers, customer]);
  };

  return (
    <Routes>
      {/* {!user ? (
        
      ) : ( */}
        <>
        <Route path="/login" element={<Login onLogin={setUser} />} />
          <Route path="/ledger-home" element={<LedgerHome handleClick={setCustomers} />} />
          <Route path="/add-customer" element={<AddCustomer onAdd={onAdd} />} />
          <Route path="/customer/:id" element={<CustomerLedger />} />

        </>
      {/* // )} */}
    </Routes>
  );
}
