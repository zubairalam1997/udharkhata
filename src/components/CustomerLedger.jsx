import React, { useState } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";

export default function CustomerLedger() {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const customer = location.state;

  const [transactions, setTransactions] = useState([]);

  return (
    <div className="min-h-screen bg-[#f7e2b8] flex flex-col justify-between">
      <div className="w-full max-w-md bg-[#fdecc8] shadow-lg mx-auto flex flex-col flex-grow">

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
        <div className="flex-grow divide-y divide-yellow-300 px-4 py-6">
          {transactions.length === 0 ? (
            <div className="text-center text-gray-500 italic">
              "No transactions yet. Start adding entries to keep track of your ledger."
            </div>
          ) : (
            transactions.map((t) => (
              <div
                key={t.id}
                className="flex justify-between py-3"
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
            ))
          )}
        </div>

        {/* ADD TRANSACTION BUTTONS */}
        <div className="flex justify-between p-4 border-t border-yellow-300">
          <button
            onClick={() =>
              navigate(`/customer/${id}/add-transaction`, {
                state: { type: "given", customer },
              })
            }
            className="w-[48%] bg-[#2f5f5f] text-white py-2 rounded"
          >
            Add Given
          </button>
          <button
            onClick={() =>
              navigate(`/customer/${id}/add-transaction`, {
                state: { type: "received", customer },
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