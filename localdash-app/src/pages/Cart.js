import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Cart = ({ cart, updateQuantity, removeFromCart }) => {
  const navigate = useNavigate();
  const [isScanning, setIsScanning] = useState(false);
  
  // Simulated Rider Data
  const [riders, setRiders] = useState([
    { id: 1, name: "Rahul S.", rating: 4.9, time: "12 min", distance: "0.8 km", status: "Arriving fast" },
    { id: 2, name: "Amit K.", rating: 4.7, time: "18 min", distance: "1.2 km", status: "Nearby" },
    { id: 3, name: "Vikash", rating: 4.8, time: "22 min", distance: "2.1 km", status: "On another delivery" }
  ]);

  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const deliveryFee = totalPrice > 199 ? 0 : 35; // Free delivery over ₹199
  const grandTotal = totalPrice + deliveryFee;

  // The simulated radar refresh function
  const handleRefreshRadar = () => {
    setIsScanning(true);
    setTimeout(() => {
      // Scramble the times and distances to simulate real-time finding
      setRiders(riders.map(rider => ({
        ...rider,
        time: `${Math.floor(Math.random() * 15) + 5} min`,
        distance: `${(Math.random() * 2 + 0.5).toFixed(1)} km`,
      })).sort((a, b) => parseInt(a.time) - parseInt(b.time)));
      setIsScanning(false);
    }, 1500);
  };

  if (cart.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center">
        <div className="text-6xl mb-6">🛒</div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Your cart is empty</h2>
        <p className="text-gray-500 mb-8 max-w-md">Looks like you haven't added any items to your cart yet. Let's find something delicious or useful!</p>
        <Link to="/" className="bg-green-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-green-700 transition-colors shadow-lg shadow-green-200">
          Start Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FAFAFA] font-sans pb-24 px-4 sm:px-6 lg:px-8 py-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-8">Review your Cart</h1>

        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* LEFT COLUMN: THE ITEMS */}
          <div className="lg:w-2/3 space-y-4">
            <div className="bg-white rounded-3xl p-6 shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-gray-100">
              <h2 className="text-lg font-bold text-gray-900 mb-6 border-b pb-4">Items ({cart.length})</h2>
              
              <div className="space-y-6">
                {cart.map(item => (
                  <div key={item.id} className="flex gap-4 items-center">
                    {/* Item Image */}
                    <div className="w-20 h-20 rounded-2xl overflow-hidden bg-gray-50 shrink-0 border border-gray-100">
                      <img src={item.img} alt={item.name} className="w-full h-full object-cover" />
                    </div>
                    
                    {/* Item Details */}
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900 line-clamp-1">{item.name}</h3>
                      <p className="text-xs text-gray-400 mt-1">{item.size || 'Standard Size'}</p>
                      <p className="text-green-600 font-extrabold mt-2">₹{item.price}</p>
                    </div>

                    {/* Controls */}
                    <div className="flex flex-col items-end gap-3 shrink-0">
                      <div className="flex items-center bg-gray-50 rounded-xl border border-gray-200 p-1">
                        <button onClick={() => updateQuantity(item.id, -1)} className="w-8 h-8 flex items-center justify-center text-gray-600 font-bold hover:bg-white rounded-lg transition-colors">-</button>
                        <span className="w-8 text-center font-bold text-sm">{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.id, 1)} className="w-8 h-8 flex items-center justify-center text-green-600 font-bold hover:bg-white rounded-lg transition-colors">+</button>
                      </div>
                      <button onClick={() => removeFromCart(item.id)} className="text-xs text-red-500 font-bold hover:underline">Remove</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: RADAR & CHECKOUT */}
          <div className="lg:w-1/3 space-y-6">
            
            {/* THE LIVE DELIVERY RADAR */}
            <div className="bg-[#0f172a] rounded-3xl p-6 shadow-2xl relative overflow-hidden text-white border border-gray-800">
              {/* Radar Background Glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/10 rounded-full blur-3xl pointer-events-none"></div>
              
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-lg font-black text-white flex items-center gap-2">
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                    </span>
                    Live Fleet Status
                  </h3>
                  <p className="text-[10px] text-gray-400 uppercase tracking-widest mt-1">Optimal Riders Available</p>
                </div>
                <button 
                  onClick={handleRefreshRadar}
                  disabled={isScanning}
                  className="bg-white/10 hover:bg-white/20 p-2 rounded-xl transition-colors disabled:opacity-50"
                >
                  🔄
                </button>
              </div>

              {isScanning ? (
                <div className="py-8 flex flex-col items-center justify-center text-center">
                  <div className="w-10 h-10 border-4 border-green-500/30 border-t-green-500 rounded-full animate-spin mb-4"></div>
                  <p className="text-sm font-medium text-green-400 animate-pulse">Scanning area for active riders...</p>
                </div>
              ) : (
                <div className="space-y-4 mb-6">
                  {riders.map((rider, index) => (
                    <div key={rider.id} className={`flex items-center gap-4 p-3 rounded-2xl border ${index === 0 ? 'bg-green-500/10 border-green-500/30' : 'bg-white/5 border-white/10'}`}>
                      <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-lg shrink-0">
                        🛵
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-start">
                          <h4 className="font-bold text-sm">{rider.name}</h4>
                          <span className="text-green-400 font-bold text-xs">{rider.time}</span>
                        </div>
                        <div className="flex justify-between items-center mt-1">
                          <span className="text-[10px] text-gray-400">★ {rider.rating} • {rider.distance}</span>
                          {index === 0 && <span className="bg-green-500 text-black text-[9px] font-black uppercase px-2 py-0.5 rounded-full">Best Match</span>}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* BILL SUMMARY */}
            <div className="bg-white rounded-3xl p-6 shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-gray-100">
              <h3 className="font-bold text-gray-900 mb-4">Bill Details</h3>
              <div className="space-y-3 text-sm mb-6 border-b pb-6">
                <div className="flex justify-between text-gray-600">
                  <span>Item Total</span>
                  <span>₹{totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Delivery Fee</span>
                  <span className={deliveryFee === 0 ? "text-green-600 font-bold" : ""}>
                    {deliveryFee === 0 ? 'FREE' : `₹${deliveryFee}`}
                  </span>
                </div>
                {deliveryFee > 0 && (
                  <p className="text-[10px] text-gray-400 text-right">Add ₹{(199 - totalPrice).toFixed(2)} more for FREE delivery</p>
                )}
              </div>
              <div className="flex justify-between text-lg font-black text-gray-900 mb-6">
                <span>To Pay</span>
                <span>₹{grandTotal.toFixed(2)}</span>
              </div>

              <button 
                onClick={() => navigate('/checkout')}
                className="w-full bg-green-600 text-white py-4 rounded-2xl font-black text-lg hover:bg-green-700 transition-colors shadow-lg shadow-green-200 active:scale-[0.98] flex items-center justify-center gap-2"
              >
                Lock Rider & Checkout <span>→</span>
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;