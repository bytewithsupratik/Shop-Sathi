import React from 'react';
import { useNavigate } from 'react-router-dom';

const Checkout = ({ cart, clearCart }) => {
  const navigate = useNavigate();
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleOrder = (e) => {
    e.preventDefault();
    clearCart();
    navigate('/success');
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-3xl font-bold mb-8">Checkout</h1>
      <div className="bg-white p-6 rounded-3xl shadow-lg border border-gray-100">
        <form onSubmit={handleOrder} className="space-y-4">
          <input required className="w-full p-4 border rounded-xl" placeholder="Full Name" />
          <textarea required className="w-full p-4 border rounded-xl" placeholder="Delivery Address" rows="3" />
          <div className="flex justify-between font-bold text-xl py-4 border-t border-b">
            <span>To Pay:</span>
            <span>${total.toFixed(2)}</span>
          </div>
          <button type="submit" className="w-full bg-green-600 text-white py-4 rounded-2xl font-bold text-lg shadow-lg shadow-green-100">
            Place Order
          </button>
        </form>
      </div>
    </div>
  );
};

export default Checkout;