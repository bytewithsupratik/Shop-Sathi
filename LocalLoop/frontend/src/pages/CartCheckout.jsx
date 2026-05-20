import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Lock, MapPin, Store, CheckSquare, Square, ScanLine, CreditCard, Banknote, Target, CheckCircle } from 'lucide-react';
import { products, shops } from '../data/mockData';
import './CartCheckout.css';

const CartCheckout = () => {
  const [step, setStep] = useState('checkout'); // checkout, success
  const [cartItems, setCartItems] = useState([
    { ...products[0], quantity: 1, name: "Premium Darjeeling First Flush", shopId: 1, price: 450, image: "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?auto=format&fit=crop&w=400&q=80" },
    { ...products[1], quantity: 2, name: "Wild Forest Honey", shopId: 2, price: 190, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtMxLwWVLPhoT9Ifqw9tcUU8aVtL745Dm2Xw&s" }
  ]);
  const [paymentMethod, setPaymentMethod] = useState('upi');
  const [supportMission, setSupportMission] = useState(true);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const deliveryFee = 40;
  const missionFee = supportMission ? 10 : 0;
  const total = subtotal + (subtotal > 0 ? deliveryFee + missionFee : 0);
  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  if (step === 'success') {
    return (
      <div className="checkout-page flex flex-col items-center justify-center min-h-screen">
        <div className="bg-white p-8 rounded-2xl shadow-lg max-w-lg w-full text-center animate-fade-in">
          <div className="w-20 h-20 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle size={40} />
          </div>
          <h2 className="text-3xl font-bold mb-4 text-slate-800" style={{ fontFamily: 'Outfit' }}>Order Confirmed!</h2>
          <p className="text-slate-500 mb-8 text-lg">
            Your order has been placed successfully. Delivery expected in 30-45 minutes.
          </p>
          <div className="bg-slate-50 p-6 rounded-xl mb-8 border border-slate-200 text-left">
            <div className="flex justify-between mb-3 text-slate-600">
              <span>Order ID</span>
              <span className="font-semibold text-slate-800">#LL-109482</span>
            </div>
            <div className="flex justify-between text-slate-600">
              <span>Amount Paid</span>
              <span className="font-semibold text-orange-600">₹{total}</span>
            </div>
          </div>
          <Link to="/" className="place-order-btn" style={{ textDecoration: 'none' }}>Continue Shopping</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="checkout-page animate-fade-in">
      <header className="checkout-header">
        <Link to="/" className="checkout-header-logo">
          <Store size={24} /> Shop Sathi
        </Link>
        <div className="secure-checkout-badge">
          <Lock size={16} /> Secure Checkout
        </div>
      </header>

      <div className="checkout-container">
        {/* Left Column */}
        <div className="checkout-left-col">

          {/* Section 1: Delivery Details */}
          <div className="checkout-section">
            <div className="section-header-row">
              <div className="step-circle active">1</div>
              <h2 className="section-title-text">Delivery Details</h2>
            </div>

            <div className="map-placeholder">
              <img
                src="https://static.vecteezy.com/system/resources/previews/001/977/224/non_2x/gps-map-with-pin-illustration-free-vector.jpg" width="400px" height="300px"
                alt="Map Background"
                className="map-bg-img"
              />
              <img
                src="https://cdn-icons-png.flaticon.com/512/684/684908.png"
                alt="Pin"
                className="map-pin"
                style={{ filter: 'hue-rotate(330deg) saturate(3) brightness(1.2)' }}
              />
              <button className="use-location-btn">
                <Target size={16} /> Use Current Location
              </button>
            </div>

            <div className="form-row">
              <div className="input-group">
                <label className="input-label">Full Name</label>
                <input type="text" className="input-field" defaultValue={localStorage.getItem('userName') || "Rahul Sharma"} />
              </div>
            </div>

            <div className="form-row">
              <div className="input-group">
                <label className="input-label">Street Address / House No.</label>
                <input type="text" className="input-field" defaultValue="14/B, HakimPara" />
              </div>
            </div>

            <div className="form-row two-cols">
              <div className="input-group">
                <label className="input-label">Landmark</label>
                <input type="text" className="input-field" defaultValue="Near Kanchenjunga Stadium" />
              </div>
              <div className="input-group">
                <label className="input-label">Phone Number</label>
                <input type="text" className="input-field" defaultValue="+91 98765 43210" />
              </div>
            </div>
          </div>

          {/* Section 2: Payment Method */}
          <div className="checkout-section">
            <div className="section-header-row">
              <div className="step-circle">2</div>
              <h2 className="section-title-text">Payment Method</h2>
            </div>

            <div className="payment-methods-list">
              <div
                className={`payment-method-card ${paymentMethod === 'upi' ? 'active' : ''}`}
                onClick={() => setPaymentMethod('upi')}
              >
                <div className="pm-left">
                  <div className="pm-icon-box">
                    <ScanLine size={20} />
                  </div>
                  <div className="pm-details">
                    <span className="pm-title">UPI / QR Scan</span>
                    <span className="pm-subtitle">Google Pay, PhonePe, Paytm</span>
                  </div>
                </div>
                <div className="custom-radio">
                  <div className="custom-radio-inner"></div>
                </div>
              </div>

              <div
                className={`payment-method-card ${paymentMethod === 'card' ? 'active' : ''}`}
                onClick={() => setPaymentMethod('card')}
              >
                <div className="pm-left">
                  <div className="pm-icon-box">
                    <CreditCard size={20} />
                  </div>
                  <div className="pm-details">
                    <span className="pm-title">Credit / Debit Card</span>
                    <span className="pm-subtitle">Visa, Mastercard, RuPay</span>
                  </div>
                </div>
                <div className="custom-radio">
                  <div className="custom-radio-inner"></div>
                </div>
              </div>

              <div
                className={`payment-method-card ${paymentMethod === 'cod' ? 'active' : ''}`}
                onClick={() => setPaymentMethod('cod')}
              >
                <div className="pm-left">
                  <div className="pm-icon-box">
                    <Banknote size={20} />
                  </div>
                  <div className="pm-details">
                    <span className="pm-title">Cash on Delivery</span>
                    <span className="pm-subtitle">Pay when you receive the order</span>
                  </div>
                </div>
                <div className="custom-radio">
                  <div className="custom-radio-inner"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="checkout-right-col">
          <div className="checkout-section sticky top-6">
            <div className="summary-header">
              <h2 className="summary-title">Order Summary</h2>
              <div className="item-count-badge">{totalItems} Items</div>
            </div>

            <div className="summary-items">
              {cartItems.map((item, idx) => (
                <div key={idx} className="summary-item">
                  <div className="item-left">
                    <div className="item-img-container">
                      <img src={item.image} alt={item.name} className="item-img" />
                      <div className="item-qty-badge">x{item.quantity}</div>
                    </div>
                    <div className="item-details">
                      <span className="item-name">{item.name}</span>
                      <span className="item-shop">{shops.find(s => s.id === item.shopId)?.name || "Golden Tips Tea Estate"}</span>
                    </div>
                  </div>
                  <div className="item-price">₹{item.price * item.quantity}</div>
                </div>
              ))}
            </div>

            <div className="summary-totals">
              <div className="totals-row">
                <span>Subtotal</span>
                <span>₹{subtotal}</span>
              </div>
              <div className="totals-row">
                <span>Delivery Partner Fee</span>
                <span>₹{deliveryFee}</span>
              </div>

              <div className="mission-checkbox-container" onClick={() => setSupportMission(!supportMission)}>
                {supportMission ? (
                  <CheckSquare size={20} color="#c2410c" />
                ) : (
                  <Square size={20} color="#cbd5e1" />
                )}
                <div className="mission-text">
                  <span className="mission-title" style={{ color: supportMission ? '#1e293b' : '#64748b' }}>
                    Support Local Mission (+₹10)
                  </span>
                  <span className="mission-subtitle">100% goes directly to the merchant's welfare fund.</span>
                </div>
              </div>
            </div>

            <div className="dashed-divider"></div>

            <div className="final-total-row">
              <span className="final-total-label">Total to Pay</span>
              <span className="final-total-amount">₹{total}</span>
            </div>

            <button className="place-order-btn" onClick={() => setStep('success')}>
              Place Order securely <Lock size={18} />
            </button>
            <p className="terms-text">By placing this order, you agree to our Terms of Service.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartCheckout;
