import React from "react";

export default function LedgerHome() {
  const customers = [
    { id: 1, name: "Ramesh Traders", lastTxn: "12 Sep 2025", amount: 5400 },
    { id: 2, name: "Suresh Store", lastTxn: "10 Sep 2025", amount: -1200 },
    { id: 3, name: "Aman Electricals", lastTxn: "08 Sep 2025", amount: 980 },
  ];

  return (
    <div className="min-h-screen bg-[#f7e2b8] flex justify-center">
      <div className="w-full max-w-md bg-[#fdecc8] shadow-lg relative">

        {/* HEADER */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-yellow-300">
          <div className="flex items-center gap-2">
            {/* Profile Icon */}
            <div className="w-9 h-9 rounded-full bg-gray-300 flex items-center justify-center">
              👤
            </div>
            <div>
              <div className="font-hand text-lg text-[#2f5f5f]">
                My Ledger
              </div>
              <div className="text-xs text-gray-500">
                ConfirmLedger
              </div>
            </div>
          </div>
        </div>

        {/* CUSTOMER LIST */}
        <div className="divide-y divide-yellow-300">
          {customers.map((c) => (
            <div
              key={c.id}
              className="flex items-center justify-between px-4 py-3 hover:bg-yellow-100 cursor-pointer"
            >
              <div>
                <div className="font-medium text-gray-800">
                  {c.name}
                </div>
                <div className="text-[11px] text-gray-500">
                  Last txn: {c.lastTxn}
                </div>
              </div>

              <div
                className={`font-semibold ${
                  c.amount >= 0 ? "text-green-600" : "text-red-600"
                }`}
              >
                ₹{Math.abs(c.amount)}
              </div>
            </div>
          ))}
        </div>

        {/* FLOATING ADD CUSTOMER BUTTON */}
        <button
          className="fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg text-2xl"
          title="Add Customer"
        >
          +
        </button>

      </div>
    </div>
  );
}
