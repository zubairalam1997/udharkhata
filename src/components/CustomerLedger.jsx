import React, { useState } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { useTransactionContext } from "../context/TransactionContext";
import ModeTooltip from "./ModeTooltip";

export default function CustomerLedger() {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const customer = location.state;
  const { transactions } = useTransactionContext();

  // 🔹 Store mode per customer
  const [confirmationModes, setConfirmationModes] = useState({});

  // 🔹 Current customer's mode (default STRICT)
  const confirmationMode =
    confirmationModes[customer.id] || "STRICT";

  // Update mode for this customer
  const updateMode = (mode) => {
    setConfirmationModes((prev) => ({
      ...prev,
      [customer.id]: mode,
    }));
  };
  

  // Filter transactions
  const customerTransactions = transactions.filter(
    (t) => t.customerId === customer.id
  );

  const totalBalance = customerTransactions.reduce(
    (sum, t) => sum + t.amount,
    0
  );

  return (
    <div className="min-h-screen bg-[#f7e2b8] flex flex-col">
      <div className="w-full max-w-md bg-[#fdecc8] shadow-lg mx-auto flex flex-col flex-grow">

       {/* HEADER */}
<div className="px-4 py-3 border-b border-yellow-300">
  <div className="flex items-center justify-between">
    {/* LEFT: Back + Name */}
    <div className="flex items-center">
      <button
        onClick={() => navigate(-1)}
        className="mr-3 text-xl"
      >
        ←
      </button>

      <div>
        <div className="font-hand text-lg text-[#2f5f5f] leading-tight">
          {customer.name}
        </div>
        <div className="text-xs text-gray-500">
          Transaction History
        </div>
      </div>
    </div>

    {/* RIGHT: Mode Toggle */}{/* RIGHT: MODE TOGGLE */}
<div className="flex bg-[#e8d3a3] rounded-full p-[2px] text-xs space-x-1">
  
  {/* Two-Way Button with Tooltip */}
  <div className="relative group">
    <button
      onClick={() => updateMode("STRICT")}
      className={`px-3 py-1 rounded-full transition ${
        confirmationMode === "STRICT"
          ? "bg-[#2f5f5f] text-white"
          : "text-[#2f5f5f]"
      }`}
    >
      Two-Way
    </button>
    <div className="absolute top-full mt-1 hidden group-hover:block">
      <ModeTooltip mode="STRICT" />
    </div>
  </div>

  {/* Personal Button with Tooltip */}
  <div className="relative group">
    <button
      onClick={() => updateMode("PERSONAL")}
      className={`px-3 py-1 rounded-full transition ${
        confirmationMode === "PERSONAL"
          ? "bg-[#2f5f5f] text-white"
          : "text-[#2f5f5f]"
      }`}
    >
      Personal
    </button>
    <div className="absolute top-full mt-1 hidden group-hover:block">
      <ModeTooltip mode="PERSONAL" />
    </div>
  </div>
</div>

  </div>
</div>
        {/* BALANCE */}
        <div className="px-4 py-3 border-b border-yellow-300">
          <div className="text-sm">Total Balance</div>
          <div
            className={`text-lg font-semibold ${
              totalBalance >= 0 ? "text-green-600" : "text-red-600"
            }`}
          >
            ₹{Math.abs(totalBalance)}
          </div>
        </div>

        {/* TRANSACTIONS */}
        <div className="flex-grow divide-y divide-yellow-300 px-4 py-6">
          {customerTransactions.length === 0 ? (
            <div className="text-center text-gray-500 italic">
              No transactions yet
            </div>
          ) : (
            customerTransactions.map((t) => (
              <div key={t.id} className="flex justify-between py-3">
                <div>
                  <div className="text-sm">{t.desc}</div>
                  <div className="text-[11px] text-gray-500">{t.date}</div>
                </div>
                <div
                  className={`font-semibold ${
                    t.amount >= 0 ? "text-green-600" : "text-red-600"
                  }`}
                >
                  ₹{Math.abs(t.amount)}
                </div>
              </div>
            ))
          )}
        </div>

        {/* ADD TRANSACTION */}
        <div className="flex justify-between p-4 border-t border-yellow-300">
          <button
            onClick={() =>
              navigate(`/customer/${id}/add-transaction`, {
                state: {
                  type: "given",
                  customer,
                  confirmationMode, // ✅ per customer
                },
              })
            }
            className="w-[48%] bg-[#2f5f5f] text-white py-2 rounded"
          >
            Add Given
          </button>

          <button
            onClick={() =>
              navigate(`/customer/${id}/add-transaction`, {
                state: {
                  type: "received",
                  customer,
                  confirmationMode,
                },
              })
            }
            className="w-[48%] bg-green-600 text-white py-2 rounded"
          >
            Add Received
          </button>
        </div>
      </div>
    </div>
  );
}
