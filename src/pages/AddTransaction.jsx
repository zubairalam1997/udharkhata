import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function AddTransaction({ onAddTransaction }) {
  const { state } = useLocation();
  const navigate = useNavigate();

  const { type, customer } = state;

  const [amount, setAmount] = useState("");
  const [desc, setDesc] = useState("");
  const [date, setDate] = useState(
    new Date().toISOString().split("T")[0]
  );
  const [billImage, setBillImage] = useState(null);

  const handleSave = () => {
    if (!amount || amount <= 0) {
      alert("Enter valid amount");
      return;
    }

    const transaction = {
      id: Date.now(),
      customerId: customer.id,
      date,
      description: desc,
      amount:
        type === "given"
          ? Number(amount)
          : -Number(amount),
      billImage,
    };

    onAddTransaction(transaction);
    navigate(-1);
  };

  const handleBillCapture = (e) => {
    const file = e.target.files[0];
    if (file) {
      setBillImage(URL.createObjectURL(file));
    }
  };

  return (
    <div className="min-h-screen bg-[#f7e2b8] flex justify-center">
      <div className="w-full max-w-md bg-[#fdecc8] flex flex-col">

        {/* HEADER */}
        <div className="px-4 py-4 border-b border-yellow-300">
          <div className="text-xs text-gray-500">
            {customer.name}
          </div>
          <div
            className={`text-lg font-semibold ${
              type === "given"
                ? "text-red-600"
                : "text-green-600"
            }`}
          >
            {type === "given" ? "You Gave" : "You Got"}
          </div>
        </div>

        {/* AMOUNT */}
        <div className="px-4 py-6 border-b border-yellow-300">
          <div className="flex items-center">
            <span className="text-2xl mr-2">₹</span>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="0"
              className="w-full text-3xl bg-transparent outline-none"
            />
          </div>
        </div>

        {/* DESCRIPTION */}
        <div className="px-4 py-4 border-b border-yellow-300">
          <input
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            placeholder="Add description (optional)"
            className="w-full bg-transparent outline-none"
          />
        </div>

        {/* DATE & CAMERA */}
        <div className="px-4 py-4 flex items-center justify-between border-b border-yellow-300">

          {/* DATE ICON */}
          <label className="flex items-center cursor-pointer">
            
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="bg-transparent outline-none"
            />
          </label>

          {/* CAMERA ICON */}
          <div className="flex items-center">
            <input
              type="file"
              accept="image/*"
              capture="environment"
              onChange={handleBillCapture}
              className="hidden"
              id="camera-input"
            />
            <label
              htmlFor="camera-input"
              className="cursor-pointer text-xl"
            >
              📷
            </label>

            {billImage && (
              <img
                src={billImage}
                alt="Bill"
                className="w-10 h-10 rounded ml-2 object-cover"
              />
            )}
          </div>
        </div>

        {/* ACTION BUTTONS */}
        <div className="mt-auto px-4 py-4 flex gap-3">
          <button
            onClick={() => navigate(-1)}
            className="w-2/3 border border-gray-500 py-2 rounded"
          >
            Cancel
          </button>

          <button
            onClick={handleSave}
            className={`w-2/3 py-2 rounded text-white ${
              type === "given"
                ? "bg-red-600"
                : "bg-green-600"
            }`}
          >
            Save
          </button>
        </div>

      </div>
    </div>
  );
}
