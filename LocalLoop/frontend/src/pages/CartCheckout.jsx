import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Trash2, Plus, Minus, ArrowRight, CheckCircle, MapPin, CreditCard } from 'lucide-react';
import { products, shops } from '../data/mockData';

const CartCheckout = () => {
  const [step, setStep] = useState('cart'); // cart, checkout, success
  const [cartItems, setCartItems] = useState([
    { ...products[0], quantity: 1 },
    { ...products[1], quantity: 1 }
  ]);

  const updateQuantity = (id, delta) => {
    setCartItems(items => 
      items.map(item => {
        if (item.id === id) {
          const newQ = item.quantity + delta;
          return newQ > 0 ? { ...item, quantity: newQ } : item;
        }
        return item;
      })
    );
  };

  const removeItem = (id) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const deliveryFee = 40;
  const total = subtotal + (subtotal > 0 ? deliveryFee : 0);

  if (step === 'success') {
    return (
      <div className="container py-20 text-center animate-fade-in max-w-lg">
        <div className="w-24 h-24 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle size={48} />
        </div>
        <h2 className="text-3xl mb-4">Order Confirmed!</h2>
        <p className="text-secondary mb-8 text-lg">
          Your order has been placed successfully and sent to the local sellers. Delivery expected in 30-45 minutes.
        </p>
        <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-xl mb-8 border border-slate-200 dark:border-slate-700 text-left">
          <div className="flex justify-between mb-2">
            <span className="text-secondary">Order ID</span>
            <span className="font-semibold">#LL-109482</span>
          </div>
          <div className="flex justify-between">
            <span className="text-secondary">Amount Paid</span>
            <span className="font-semibold text-primary">₹{total}</span>
          </div>
        </div>
        <Link to="/" className="btn btn-primary w-full">Continue Shopping</Link>
      </div>
    );
  }

  return (
    <div className="container py-8 animate-fade-in">
      <h1 className="mb-8">Your Cart</h1>

      {cartItems.length === 0 ? (
        <div className="text-center py-16 card">
          <h3 className="mb-4">Your cart is empty</h3>
          <Link to="/shops" className="btn btn-primary">Discover Local Shops</Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            {step === 'cart' && (
              <div className="card p-6">
                <div className="space-y-6">
                  {cartItems.map(item => (
                    <div key={item.id} className="flex gap-4 pb-6 border-b border-slate-100 dark:border-slate-700 last:border-0 last:pb-0">
                      <img src={item.image} alt={item.name} className="w-20 h-20 md:w-24 md:h-24 object-cover rounded-lg" />
                      <div className="flex-1 flex flex-col">
                        <div className="flex justify-between items-start mb-1">
                          <h4 className="text-lg m-0">{item.name}</h4>
                          <button onClick={() => removeItem(item.id)} className="text-red-400 hover:text-red-600">
                            <Trash2 size={18} />
                          </button>
                        </div>
                        <p className="text-sm text-secondary mb-auto">Shop: {shops.find(s => s.id === item.shopId)?.name}</p>
                        <div className="flex justify-between items-end mt-4">
                          <span className="font-bold text-lg text-primary">₹{item.price}</span>
                          <div className="flex items-center gap-3 bg-secondary rounded-lg p-1">
                            <button onClick={() => updateQuantity(item.id, -1)} className="p-1 hover:bg-white dark:hover:bg-slate-700 rounded-md transition">
                              <Minus size={16} />
                            </button>
                            <span className="font-medium w-4 text-center">{item.quantity}</span>
                            <button onClick={() => updateQuantity(item.id, 1)} className="p-1 hover:bg-white dark:hover:bg-slate-700 rounded-md transition">
                              <Plus size={16} />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {step === 'checkout' && (
              <div className="space-y-6 animate-fade-in">
                <div className="card p-6">
                  <h3 className="flex items-center gap-2 mb-4 text-lg border-b border-slate-100 pb-4">
                    <MapPin className="text-primary" size={20} /> Delivery Address
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="form-group md:col-span-2">
                      <label className="form-label">Full Name</label>
                      <input type="text" className="form-control" placeholder="John Doe" defaultValue="John Doe" />
                    </div>
                    <div className="form-group md:col-span-2">
                      <label className="form-label">Address Line</label>
                      <input type="text" className="form-control" placeholder="House No, Building, Street" defaultValue="A/42, City Center Apartments" />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Area/Locality</label>
                      <select className="form-control">
                        <option>City Center</option>
                        <option>Sevoke Road</option>
                        <option>Pradhan Nagar</option>
                        <option>Hakim Para</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label className="form-label">Phone Number</label>
                      <input type="text" className="form-control" placeholder="10-digit number" defaultValue="9876543210" />
                    </div>
                  </div>
                </div>

                <div className="card p-6">
                  <h3 className="flex items-center gap-2 mb-4 text-lg border-b border-slate-100 pb-4">
                    <CreditCard className="text-primary" size={20} /> Payment Method
                  </h3>
                  <div className="space-y-3">
                    <label className="flex items-center gap-3 p-4 border border-primary rounded-lg bg-orange-50 cursor-pointer dark:bg-slate-800">
                      <input type="radio" name="payment" defaultChecked className="w-4 h-4 text-primary" />
                      <span className="font-medium">UPI / GPay / PhonePe</span>
                    </label>
                    <label className="flex items-center gap-3 p-4 border border-slate-200 dark:border-slate-700 rounded-lg cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-800">
                      <input type="radio" name="payment" className="w-4 h-4" />
                      <span className="font-medium">Credit / Debit Card</span>
                    </label>
                    <label className="flex items-center gap-3 p-4 border border-slate-200 dark:border-slate-700 rounded-lg cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-800">
                      <input type="radio" name="payment" className="w-4 h-4" />
                      <span className="font-medium">Cash on Delivery</span>
                    </label>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="lg:col-span-1">
            <div className="card p-6 sticky top-24">
              <h3 className="text-lg mb-4 pb-4 border-b border-slate-100 dark:border-slate-700">Order Summary</h3>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-secondary">
                  <span>Item Total</span>
                  <span>₹{subtotal}</span>
                </div>
                <div className="flex justify-between text-secondary">
                  <span>Local Delivery Fee</span>
                  <span>₹{deliveryFee}</span>
                </div>
                <div className="flex justify-between text-secondary text-sm">
                  <span>Taxes</span>
                  <span>₹0</span>
                </div>
              </div>
              
              <div className="flex justify-between items-center text-xl font-bold pt-4 border-t border-slate-100 dark:border-slate-700 mb-6">
                <span>Total</span>
                <span className="text-primary">₹{total}</span>
              </div>

              {step === 'cart' ? (
                <button 
                  onClick={() => setStep('checkout')}
                  className="btn btn-primary w-full"
                >
                  Proceed to Checkout <ArrowRight size={18} />
                </button>
              ) : (
                <button 
                  onClick={() => setStep('success')}
                  className="btn btn-primary w-full"
                >
                  Place Order <CheckCircle size={18} />
                </button>
              )}

              {step === 'checkout' && (
                <button 
                  onClick={() => setStep('cart')}
                  className="btn w-full mt-3 text-secondary"
                  style={{ backgroundColor: 'transparent', boxShadow: 'none' }}
                >
                  Back to Cart
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartCheckout;
