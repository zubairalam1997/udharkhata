import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter } from 'react-router-dom';
import { CustomerProvider } from './context/CustomerContext';
import { TransactionProvider as TransactionContext } from './context/TransactionContext';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <CustomerProvider>
    <TransactionContext>
        <App />
        </TransactionContext>
      </CustomerProvider>
    </BrowserRouter>
  </React.StrictMode>
)