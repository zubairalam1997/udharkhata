import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddCustomer({ onAdd }) {
  const navigate = useNavigate();

  const [form, setForm] = useState({ name: "", proprietor: "", phone: "" });
  const [showManual, setShowManual] = useState(false);

  const contacts = [
    { name: "Ramesh Traders", proprietor: "Ramesh", phone: "9876543210" },
    { name: "Anita Store", proprietor: "Anita", phone: "9123456780" },
    { name: "Khan Electronics", proprietor: "Khan", phone: "9988776655" },
  ];

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.proprietor || !form.phone) return;
    onAdd(form);        // add customer to state in App.jsx
    navigate("/");      // redirect back to Dashboard
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded shadow">
      <h2 className="text-lg font-semibold mb-4">Add Customer</h2>

      {/* Toggle Manual Form */}
      <button
        onClick={() => setShowManual(!showManual)}
        className="w-full mb-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        {showManual ? "Hide Manual Form" : "Add Manually"}
      </button>

      {showManual && (
        <form onSubmit={handleSubmit} className="space-y-3 mb-4">
          <input
            type="text"
            name="name"
            placeholder="Shop Name"
            value={form.name}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
          />
          <input
            type="text"
            name="proprietor"
            placeholder="Proprietor"
            value={form.proprietor}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={form.phone}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
          />
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
          >
            Save Customer
          </button>
        </form>
      )}

      {/* Contact List */}
      <div>
        <p className="text-sm text-gray-600 mb-2">Choose from contacts:</p>
        <ul className="space-y-2">
          {contacts.map((c, idx) => (
            <li key={idx}>
              <button
                onClick={() => {
                  onAdd(c);
                  navigate("/");   // redirect after choosing contact
                }}
                className="w-full text-left px-3 py-2 border rounded hover:bg-gray-100"
              >
                {c.name} ({c.proprietor}) — {c.phone}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
