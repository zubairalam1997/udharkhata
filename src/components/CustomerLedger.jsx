import React from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";

export default function CustomerLedger() {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const customer = location.state;

  // Mock transactions
  const transactions = [
    { id: 1, date: "10 Sep 2025", desc: "Goods Sold", amount: 2000 },
    { id: 2, date: "11 Sep 2025", desc: "Payment Received", amount: -500 },
    { id: 3, date: "12 Sep 2025", desc: "Goods Sold", amount: 3900 },
  ];

  return (
    <div className="min-h-screen bg-[#f7e2b8] flex justify-center">
      <div className="w-full max-w-md bg-[#fdecc8] shadow-lg">

        {/* HEADER */}
        <div className="flex items-center px-4 py-3 border-b border-yellow-300">
          <button
            onClick={() => navigate(-1)}
            className="mr-3 text-xl"
          >
            ←
          </button>
          <div>
            <div className="font-hand text-lg text-[#2f5f5f]">
              {customer?.name || `Customer #${id}`}
            </div>
            <div className="text-xs text-gray-500">
              Transaction History
            </div>
          </div>
        </div>

        {/* TRANSACTIONS */}
        <div className="divide-y divide-yellow-300">
          {transactions.map((t) => (
            <div
              key={t.id}
              className="flex justify-between px-4 py-3"
            >
              <div>
                <div className="text-sm text-gray-800">
                  {t.desc}
                </div>
                <div className="text-[11px] text-gray-500">
                  {t.date}
                </div>
              </div>

              <div
                className={`font-semibold ${
                  t.amount >= 0
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              >
                ₹{Math.abs(t.amount)}
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
