import React from 'react';
import { Link } from "react-router-dom";
import { FaCheckCircle } from 'react-icons/fa';
import { bg } from '../images/index';

const ThankYou = ({ orderId }) => {
  return (
    <div
      className="h-screen w-full flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: bg,
      }}
    >
      <div className="bg-white bg-opacity-90 rounded-lg shadow-xl p-8 max-w-md w-full">
        <div className="text-center">
          <FaCheckCircle className="mx-auto text-green-500 text-5xl mb-4" />
          <h2 className="text-3xl font-bold mb-4">Thank You for Your Patronage!</h2>
          <p className="text-gray-700 mb-6">
            Your booking has been successfully placed.
          </p>
          <p className="text-gray-600 mb-6 font-mono text-sm">
            Order ID: {orderId || 'Not Available'}
          </p>
          <div className="space-y-4">
            <a
              href={`/invoice/${orderId}`}
              className="inline-block text-indigo-600 hover:text-indigo-800 font-medium"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Invoice
            </a>
            <Link
              to="/"
              className="bg-indigo-600 text-white py-2 px-6 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 transition duration-150 ease-in-out"
            >
              Close
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
