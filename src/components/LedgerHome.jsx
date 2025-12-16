import React from "react";
import { useNavigate } from "react-router-dom";

export default function LedgerHome({handleClick}) {
  const navigate = useNavigate();

  const customers = [
    { id: 1, name: "Ramesh Traders", lastTxn: "12 Sep 2025", amount: 5400 },
    { id: 2, name: "Suresh Store", lastTxn: "10 Sep 2025", amount: -1200 },
    { id: 3, name: "Aman Electricals", lastTxn: "08 Sep 2025", amount: 980 },
  ];

  // Handle click on customer - THIS IS CORRECT
  const openCustomerLedger = (customer) => {
    console.log('Customer clicked:', customer);
    handleClick(customer);
    // This function correctly triggers navigation
    navigate(`/customer/${customer.id}`, { state: customer });
  };
  
  // Removed unused handleclick function

  return (
    <div className="min-h-screen bg-[#f7e2b8] flex justify-center">
      <div className="w-full max-w-md bg-[#fdecc8] shadow-lg relative">

        {/* HEADER */}
        <div className="flex items-center px-4 py-3 border-b border-yellow-300">
          <div className="w-9 h-9 rounded-full bg-[#e8d3a3] flex items-center justify-center">
            👤
          </div>
          <div className="ml-2">
            <div className="font-hand text-lg text-[#2f5f5f]">My Ledger</div>
            <div className="text-xs text-gray-500">ConfirmLedger</div>
          </div>
        </div>

        {/* CUSTOMER LIST: Removed the problematic onClick={handleclick} here */}
        <div className="divide-y divide-yellow-300 relative pb-24">
          {customers.map((customer) => (
            <div
              key={customer.id}
              // This is the correct, specific handler for the customer item
              onClick={() => openCustomerLedger(customer)}  
              className="flex items-center justify-between px-4 py-3
                         hover:bg-yellow-100 cursor-pointer active:bg-yellow-200"
            >
              <div>
                <div className="font-medium text-gray-800">{customer.name}</div>
                <div className="text-[11px] text-gray-500">
                  Last txn: {customer.lastTxn}
                </div>
              </div>

              <div
                className={`font-semibold ${
                  customer.amount >= 0 ? "text-green-600" : "text-red-600"
                }`}
              >
                ₹{Math.abs(customer.amount)}
              </div>
            </div>
          ))}

          {/* ADD CUSTOMER */}
          <button
            onClick={() => navigate("/add-customer")}
            className="absolute bottom-6 right-6 w-14 h-14 rounded-full
                       bg-[#fdecc8] border-2 border-[#2f5f5f]
                       shadow-md flex items-center justify-center
                       text-[#2f5f5f] text-3xl font-bold"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}