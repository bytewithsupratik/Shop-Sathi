import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Lock, MapPin, Store, CheckSquare, Square, ScanLine, CreditCard, Banknote, Target, CheckCircle, Plus, Minus, Trash2, ShoppingBag } from 'lucide-react';
import { shops } from '../data/mockData';
import { useCart } from '../context/CartContext';
import './CartCheckout.css';

const CartCheckout = () => {
  const [step, setStep] = useState('checkout'); // checkout, success
  const { cartItems, updateQuantity, removeFromCart, clearCart, getCartCount } = useCart();
  const [paymentMethod, setPaymentMethod] = useState('upi');
  const [supportMission, setSupportMission] = useState(true);
  const [orderTotal, setOrderTotal] = useState(0);
  const [orderIdStr, setOrderIdStr] = useState('');

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const deliveryFee = 40;
  const missionFee = supportMission ? 10 : 0;
  const total = subtotal + (subtotal > 0 ? deliveryFee + missionFee : 0);
  const totalItems = getCartCount();

  const handlePlaceOrder = () => {
    const orderId = `SS-${Math.floor(100000 + Math.random() * 900000)}`;
    setOrderIdStr(orderId);
    setOrderTotal(total);
    
    // Save to user history
    const existingOrders = JSON.parse(localStorage.getItem('userOrders') || '[]');
    const newOrder = {
      id: orderId,
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      amount: total,
      status: 'out', // 'out' for out for delivery
      statusLabel: 'OUT FOR DELIVERY',
      shopName: cartItems[0]?.shopName || 'Multiple Shops',
      iconType: 'truck'
    };
    localStorage.setItem('userOrders', JSON.stringify([newOrder, ...existingOrders]));
    
    setStep('success');
    clearCart();
  };

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
              <span className="font-semibold text-slate-800">#{orderIdStr}</span>
            </div>
            <div className="flex justify-between text-slate-600">
              <span>Amount Paid</span>
              <span className="font-semibold text-orange-600">₹{orderTotal}</span>
            </div>
          </div>
          <Link to="/" className="place-order-btn" style={{ textDecoration: 'none' }}>Continue Shopping</Link>
        </div>
      </div>
    );
  }

  // Empty cart state
  if (cartItems.length === 0) {
    return (
      <div className="checkout-page flex flex-col items-center justify-center min-h-screen">
        <div className="bg-white p-10 rounded-2xl shadow-lg max-w-md w-full text-center animate-fade-in">
          <div className="w-24 h-24 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <ShoppingBag size={44} className="text-slate-300" />
          </div>
          <h2 className="text-2xl font-bold mb-3 text-slate-800" style={{ fontFamily: 'Outfit' }}>Your cart is empty</h2>
          <p className="text-slate-500 mb-8">
            Looks like you haven't added anything yet. Explore shops and add your favorites!
          </p>
          <Link to="/shops" className="place-order-btn" style={{ textDecoration: 'none' }}>Browse Shops</Link>
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
                <input type="text" className="input-field" defaultValue={localStorage.getItem('userName') || ""} />
              </div>
            </div>

            <div className="form-row">
              <div className="input-group">
                <label className="input-label">Street Address / House No.</label>
                <input type="text" className="input-field" defaultValue={localStorage.getItem('userAddress') || ""} placeholder="e.g. 14/B, Hakim Para" />
              </div>
            </div>

            <div className="form-row two-cols">
              <div className="input-group">
                <label className="input-label">Landmark</label>
                <input type="text" className="input-field" defaultValue={localStorage.getItem('userLandmark') || ""} placeholder="e.g. Near Kanchenjunga Stadium" />
              </div>
              <div className="input-group">
                <label className="input-label">Phone Number</label>
                <input type="text" className="input-field" defaultValue={localStorage.getItem('userPhone') || ""} placeholder="+91 98765 43210" />
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
              {cartItems.map((item) => (
                <div key={item.id} className="summary-item">
                  <div className="item-left">
                    <div className="item-img-container">
                      <img src={item.image} alt={item.name} className="item-img" />
                      <div className="item-qty-badge">x{item.quantity}</div>
                    </div>
                    <div className="item-details">
                      <span className="item-name">{item.name}</span>
                      <span className="item-shop">{item.shopName || shops.find(s => s.id === item.shopId)?.name || "Shop"}</span>
                    </div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', background: '#f1f5f9', borderRadius: '0.5rem', padding: '0.25rem' }}>
                      <button
                        onClick={() => updateQuantity(item.id, -1)}
                        style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '0.2rem', color: '#475569', display: 'flex' }}
                      >
                        <Minus size={14} />
                      </button>
                      <span style={{ fontWeight: '700', fontSize: '0.85rem', minWidth: '18px', textAlign: 'center' }}>{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, 1)}
                        style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '0.2rem', color: '#475569', display: 'flex' }}
                      >
                        <Plus size={14} />
                      </button>
                    </div>
                    <div className="item-price">₹{item.price * item.quantity}</div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#ef4444', display: 'flex', padding: '0.2rem' }}
                      title="Remove item"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
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

            <button className="place-order-btn" onClick={handlePlaceOrder}>
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
