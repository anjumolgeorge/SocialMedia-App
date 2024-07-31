import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';

function SendOTP() {
  return (
    <div className="bg-blue-950 h-screen overflow-hidden relative flex justify-center items-center">
      <div className="text-blue-950">

        <div className="bg-gray-400 w-96 h-96 rounded-3xl shadow-lg p-8 mt-10">
          <h1 className="text-black text-lg">
            Congratulations! Your email has been successfully verified.
            To ensure security and complete your account setup, please enter the OTP sent to your email address.
          </h1>

          <input
            type="text"
            id="otp"
            className="w-full px-4 py-3 mt-4 border border-gray-100 rounded-md focus:outline-none"
            placeholder="Enter OTP"
            style={{ boxShadow: '0 12px 15px rgba(0,0,0,0.3)' }}
          />

          <button
            className="bg-green-800 mt-8 w-full h-12 rounded-xl text-white shadow-md hover:bg-yellow-600"
            style={{ boxShadow: '0 12px 15px rgba(0,0,0,0.3)' }}
          >
            Verify OTP
          </button>
        </div>

        <FaArrowLeft className="absolute top-10 left-10 text-white text-2xl cursor-pointer" />
      </div>
    </div>
  );
}

export default SendOTP;
