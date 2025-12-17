import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCustomerContext } from '../context/CustomerContext';

export default function AddCustomer({ onAdd }) {
  const navigate = useNavigate();
  const { customers } = useCustomerContext();
  const [manualMode, setManualMode] = useState(false);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const [popupOpen, setPopupOpen] = useState(false);
  const [selectedContact, setSelectedContact] = useState(null);

  const contacts = [
    { id: 1, name: "Ramesh Kumar", phone: "9876543210" },
    { id: 2, name: "Suresh Patel", phone: "9123456789" },
    { id: 3, name: "Aman Verma", phone: "9988776655" },
    { id: 4, name: "Neha Sharma", phone: "9090909090" },
    { id: 5, name: "Rahul Traders", phone: "8899001122" },
  ];

  // Hide scrollbar but allow scroll
  const hideScrollbar =
    "overflow-y-auto scrollbar-hide";

  const handleManualSave = () => {
    if (!name.trim() || !/^[0-9]{10}$/.test(phone)) {
      alert("Enter valid name and mobile number");
      return;
    }

    console.log("Customer Added (Manual):", { name, phone });
    const newCustomer = { id: Date.now(), name, phone: phone, amount: 0 };
    const existingCustomer = customers.find(
      (customer) => customer.phone === newCustomer.phone
    );

    if (existingCustomer) {
      alert('Customer already exists. Redirecting to their ledger...');
      console.log("Customer Added (Contact):", {
        name,
        phone: selectedContact.phone,
      });
      navigate(`/customer/${existingCustomer.id}`);
      return;
    }
    onAdd(newCustomer);
    navigate("/ledger-home");
  };

  const handleContactClick = (contact) => {
    setSelectedContact(contact);
    setName(contact.name);
    setPopupOpen(true);
  };

  const confirmContactAdd = () => {
    console.log("Customer Added (Contact):", {
      name,
      phone: selectedContact.phone,
    });
    const newCustomer = { id: Date.now(), name, phone: selectedContact.phone, amount: 0 };
    console.log("Existing Customers:", customers);
    const existingCustomer = customers.find(
      (customer) => customer.phone === newCustomer.phone
    );

    if (existingCustomer) {
      alert('Customer already exists. Redirecting to their ledger...');
      console.log("Customer Added (Contact):", {
        name,
        phone: selectedContact.phone,
      });
      navigate(`/customer/${existingCustomer.id}`);
      return;
    }
    onAdd(newCustomer);
    navigate("/ledger-home");
  };

  return (
    <div className="min-h-screen bg-[#f7e2b8] flex justify-center">
    <div className="w-full max-w-md bg-[#fdecc8] shadow-lg relative">

      {/* HEADER */}
      <div className="px-4 py-3 border-b border-yellow-300">
        <div className="font-hand text-lg text-[#2f5f5f]">
          Add Customer
        </div>
      </div>

      {/* ADD MANUALLY SECTION (INITIAL STATE) */}
      {!manualMode && (
        <div className="p-4 border-b border-yellow-300">
          <button
            onClick={() => setManualMode(true)}
            className="w-full border border-[#2f5f5f] text-[#2f5f5f] py-2 rounded"
          >
            Add Manually
          </button>
        </div>
      )}

      {/* MANUAL INPUT SECTION */}
      {manualMode && (
        <div className="p-4 border-b border-yellow-300 relative">

          {/* DROPDOWN ICON – TOP RIGHT OF INPUT FIELD */}
          <button
            onClick={() => setManualMode(false)}
            className="absolute right-4 top-4 w-7 h-7 flex items-center justify-center
                       border border-[#2f5f5f] rounded-full text-[#2f5f5f]"
          >
            ▾
          </button>

          {/* CUSTOMER NAME */}
          <div className="mb-4">
            <label className="text-sm">Customer Name</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-transparent border-b-2 border-[#2f5f5f] outline-none pr-10"
            />
          </div>

          {/* MOBILE NUMBER */}
          <div className="mb-4">
              <label className="text-sm">Mobile Number</label>
              <input
                value={phone}
                onChange={(e) =>
                  setPhone(e.target.value.replace(/\D/g, "").slice(0, 10))
                }
                className="w-full bg-transparent border-b-2 border-[#2f5f5f] outline-none"
              />
            </div>

            <button
              onClick={handleManualSave}
              className="w-full bg-[#2f5f5f] text-white py-2 rounded"
            >
              Save Customer
            </button>
        </div>
      )}

        {/* CONTACT LIST */}
        <div className="p-4">
          <div className="text-sm mb-2 text-gray-700">
            Select from contacts
          </div>

          <div
            className={`max-h-64 ${hideScrollbar} border border-yellow-300 rounded`}
            style={{ scrollbarWidth: "none" }}
          >
            {contacts.map((c) => (
             <div
             key={c.id}
             onClick={() => handleContactClick(c)}
             className="px-3 py-3 cursor-pointer hover:bg-yellow-100"
           >
             <div className="text-sm font-medium">{c.name}</div>
             <div className="text-xs text-gray-500">{c.phone}</div>
           
             <div className="border-b border-[#d6b97a] mt-2" />
           </div>
           
            ))}
          </div>
        </div>

        {/* POPUP */}
        
        {popupOpen && (
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <div className="bg-[#fdecc8] p-5 rounded shadow-lg w-72">
              <div className="text-sm mb-2">Confirm customer name</div>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-transparent border-b-2 border-[#2f5f5f] outline-none mb-4"
              />
              
              <div className="flex justify-between space-x-2">
              <button
                onClick={confirmContactAdd}
                className="w-full bg-[#2f5f5f] text-white py-2 rounded"
              >
                OK
              </button>
              <button
                onClick={() => setPopupOpen(false)}
                className="w-full bg-red-600 text-white py-2 rounded "
              >
                Cancel
              </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
