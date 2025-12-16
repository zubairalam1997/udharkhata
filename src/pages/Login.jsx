import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Pencil from "../assets/pencil2.png";
import loginimg from "../assets/loginimg.png";

export default function LoginPage({ onLogin }) {
  const [Name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const navigate = useNavigate()
  const handleClick = () => {
    if (!Name || !phone) {
      alert('All fields are required')
      return
    }
    if (phone.length !== 10) {
      alert('Enter valid phone number')
      return
    }
  
    onLogin({ phone, Name })
    navigate('/')
  }
  
  
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f7e2b8] p-6">
      {/* Notebook */}
      <div className="relative w-[900px] h-[520px] bg-[#fdecc8] rounded-md shadow-xl flex overflow-hidden">

        {/* LEFT PAGE */}
        <div className="w-1/2 p-10 relative">
          {/* Lines */}
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_23px,#6fa8dc55_24px)] bg-[length:100%_24px]" />

          {/* Margin */}
          <div className="absolute left-6 top-0 bottom-0 w-[2px] bg-red-500" />

          <div className="relative z-10">
            <h1 className="font-hand text-3xl text-[#2f5f5f] mb-10">
              ConfirmLedger
            </h1>

            {/* Name */}
            <div className="mb-8 ">
              <label className="block font-hand text-xl text-[#2f5f5f] mb-1">
                Name = 
              </label>
              <input
                className="w-full bg-transparent outline-none border-b-2 border-[#2f5f5f] font-hand text-lg"
                placeholder="Enter your name"
                value={Name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            {/* Mobile */}
            <div className="mb-12">
              <label className="block font-hand text-xl text-[#2f5f5f] mb-1">
                Mobile No =
              </label>
              <input
                className="w-full bg-transparent outline-none border-b-2 border-[#2f5f5f] font-hand text-lg"
                placeholder="Enter Mobile no."
                value={phone}
                onChange={(e) => setPhone(e.target.value)}

              />
            </div>

          
            <button
  onClick={handleClick}
  className="group relative w-40 h-40 flex items-center justify-center focus:outline-none"
>
  {/* Stamp Image */}
  <img
    src={loginimg} // Place this image in your public folder
    alt="Hisab OK Stamp"
    className="w-full h-full object-contain transition-transform duration-200 group-hover:scale-95"
  />

  {/* Optional overlay text or ripple */}
  <span className="absolute inset-0 rounded-full ring-2 ring-red-400 opacity-0 group-hover:opacity-30 transition-opacity duration-200"></span>
</button>

          </div>
        </div>

        {/* SPIRAL */}
        <div className="w-[40px] flex flex-col items-center justify-center gap-4">
          {[...Array(14)].map((_, i) => (
            <div
              key={i}
              className="w-6 h-4 border-2 border-gray-700 rounded-full bg-gray-300"
            />
          ))}
        </div>

        {/* RIGHT PAGE */}
        <div className="w-1/2 p-10 relative flex flex-col items-center justify-center">
          {/* Lines */}
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_23px,#6fa8dc55_24px)] bg-[length:100%_24px]" />

          <div className="relative z-10 flex flex-col items-center">
            {/* Centered Hisab OK */}
            <h1 className="font-hand text-6xl text-blue-600 text-center leading-tight mb-10">
              Hisab
              <br />
              OK
            </h1>

            {/* Pencil Image */}
            <img
              src={Pencil}
              alt="Pencil"
              className="w-64 rotate-[-5deg]"
            />
          </div>
        </div>

      </div>
    </div>
  );
}
