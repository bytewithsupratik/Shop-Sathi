import React from 'react';
import { Link } from 'react-router-dom';

const Success = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white p-6">
      <div className="text-center">
        <div className="text-8xl mb-6">🛵</div>
        <h1 className="text-4xl font-black text-gray-800 mb-2">Order Confirmed!</h1>
        <p className="text-gray-500 mb-10 text-lg">Your neighborhood hero is on the way.</p>
        <Link to="/" className="inline-block bg-orange-500 text-white px-10 py-4 rounded-2xl font-bold shadow-lg shadow-orange-200 hover:bg-orange-600 transition-all">
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default Success;