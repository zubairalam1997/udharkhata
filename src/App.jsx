import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import AddCustomer from './components/AddCustomer';
import LedgerHome from './components/Ledger';
import CustomerLedger from './components/CustomerLedger';
import Home from './pages/PageHome';

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
          <Route path="/" element={<Dashboard user={user} customers={customers} />} />
          <Route path="/ledger-home" element={<LedgerHome handleClick={setCustomers} />} />
          <Route path="/add-customer" element={<AddCustomer onAdd={onAdd} />} />
          <Route path="/customer/:id" element={<CustomerLedger />} />
          <Route path="/pahehome" element={<PageHome />} />

        </>
      {/* // )} */}
    </Routes>
  );
}
