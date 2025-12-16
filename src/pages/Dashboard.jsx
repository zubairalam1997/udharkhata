import React from "react";
import { useNavigate } from "react-router-dom";
import Ledger from "../components/Ledger";

export default function Dashboard({ user, customers }) {
  const navigate = useNavigate();

  return (
    <div className="max-w-md mx-auto bg-gray-100 min-h-screen">
      {/* Header with Profile */}
      <div className="bg-blue-600 text-white p-4 shadow flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold">My Ledger</h2>
          <p className="text-sm opacity-80">Logged in as {user.phone}</p>
        </div>
        {/* Profile Icon */}
        <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow">
          {/* If you have a profile image, replace with <img /> */}
          <span className="text-blue-600 font-bold">
            {user.name?.charAt(0).toUpperCase()}
          </span>
        </div>
      </div>

      {/* Add Customer Button */}
      <div className="p-4">
        <button
          onClick={() => navigate("/add-customer")}
          className="w-full py-3 bg-green-500 text-white font-semibold rounded-lg shadow hover:bg-green-600 transition"
        >
          + Add Customer
        </button>
      </div>

      {/* Customer List */}
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-3">Customers</h3>
        {customers.length === 0 ? (
          <p className="text-gray-500 text-sm text-center">
            No customers added yet.
          </p>
        ) : (
          <ul className="space-y-3">
            {customers.map((c, idx) => (
              <li
                key={idx}
                className="bg-white rounded-lg shadow p-3 flex justify-between items-center hover:bg-gray-50 transition"
              >
                <div>
                  <p className="font-medium text-gray-800">{c.name}</p>
                  <p className="text-sm text-gray-500">
                    {c.proprietor} — {c.phone}
                  </p>
                </div>
                <button
                  onClick={() => navigate(`/ledger/${c.id}`)}
                  className="text-blue-600 font-semibold text-sm hover:underline"
                >
                  View
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Ledger Section (optional) */}
      {/* <Ledger entries={entries} /> */}
    </div>
  );
}
