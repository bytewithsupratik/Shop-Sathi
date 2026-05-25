import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Store, ShoppingBag, Eye, ArrowRight } from 'lucide-react';
import './Register.css';

const Register = () => {
  const [role, setRole] = useState('customer'); // 'customer' or 'seller'
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const userName = formData.get('userName');
    const userPhone = formData.get('userPhone');
    const userAddress = formData.get('userAddress');
    const userLandmark = formData.get('userLandmark');
    if (userName) localStorage.setItem('userName', userName);
    if (userPhone) localStorage.setItem('userPhone', userPhone);
    if (userAddress) localStorage.setItem('userAddress', userAddress);
    if (userLandmark) localStorage.setItem('userLandmark', userLandmark);
    localStorage.setItem('isAuthenticated', 'true');
    // Redirect based on role selection
    if (role === 'seller') {
      navigate('/dashboard');
    } else {
      navigate('/');
    }
  };

  return (
    <div className="register-container">
      {/* Left Panel - Hidden on mobile */}
      <div className="register-left">
        {/* Logo */}
        <div className="register-logo">
          <div className="register-logo-icon">
            <Store size={24} />
          </div>
          <span className="register-logo-text">Shop Sathi</span>
        </div>

        {/* Center Mockup */}
        <div className="mockup-container">
          {/* Phone Mockup Frame */}
          <div className="phone-mockup">
            <img
              src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=800"
              alt="Local Market"
              className="phone-image"
            />
            {/* Notch */}
            <div className="phone-notch"></div>
          </div>
        </div>

        {/* Testimonial Card */}
        <div className="testimonial-wrapper">
          <div className="testimonial-card">
            <div className="relative z-10">
              <span className="testimonial-quote">"</span>
              <p className="testimonial-text">
                "Joining Shop Sathi transformed my small grocery. It brings the warmth of my neighborhood shop straight to my customers' phones."
              </p>
              <div className="testimonial-author">
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80"
                  alt="Priya Sharma"
                  className="author-image"
                />
                <div>
                  <h4 className="author-name">Priya Sharma</h4>
                  <p className="author-title">Owner, Sharma Grocers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Panel - Form */}
      <div className="register-right">

        {/* Mobile Logo */}
        <div className="mobile-logo">
          <div className="register-logo-icon">
            <Store size={24} />
          </div>
          <span className="mobile-logo-text">Shop Sathi</span>
        </div>

        <div className="form-wrapper">
          <h1 className="form-title">Create an account</h1>
          <p className="form-subtitle">Join your local digital marketplace today.</p>

          <form onSubmit={handleRegister}>

            {/* Role Selection */}
            <div>
              <p className="role-label">I want to join as a</p>
              <div className="role-grid">

                <button
                  type="button"
                  onClick={() => setRole('customer')}
                  className={`role-card ${role === 'customer' ? 'active' : ''}`}
                >
                  <div className="radio-indicator">
                    {role === 'customer' && <div className="radio-dot"></div>}
                  </div>
                  <ShoppingBag className="role-icon" size={24} strokeWidth={1.5} />
                  <span className="role-text">Customer</span>
                </button>

                <button
                  type="button"
                  onClick={() => setRole('seller')}
                  className={`role-card ${role === 'seller' ? 'active' : ''}`}
                >
                  <div className="radio-indicator">
                    {role === 'seller' && <div className="radio-dot"></div>}
                  </div>
                  <Store className="role-icon" size={24} strokeWidth={1.5} />
                  <span className="role-text">Shop Owner</span>
                </button>

              </div>
            </div>

            {/* Inputs */}
            <div className="input-group" method="post">
              <label className="input-label">Full Name</label>
              <input
                type="text"
                name="userName"
                placeholder="e.g. Rahul Sen"
                className="input-field"
                required
              />
            </div>

            <div className="input-group">
              <label className="input-label">Email Address</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="input-field"
                required
              />
            </div>

            <div className="input-group">
              <label className="input-label">Phone Number</label>
              <input
                type="tel"
                name="userPhone"
                placeholder="+91 98765 43210"
                className="input-field"
                required
              />
            </div>

            <div className="input-group">
              <label className="input-label">Delivery Address</label>
              <input
                type="text"
                name="userAddress"
                placeholder="e.g. 14/B, Hakim Para, Siliguri"
                className="input-field"
                required
              />
            </div>

            <div className="input-group">
              <label className="input-label">Landmark (Optional)</label>
              <input
                type="text"
                name="userLandmark"
                placeholder="e.g. Near Kanchenjunga Stadium"
                className="input-field"
              />
            </div>

            <div className="input-group">
              <label className="input-label">Password</label>
              <div className="password-wrapper">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  className="input-field"
                  style={{ paddingRight: '3rem' }}
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="password-toggle"
                >
                  <Eye size={20} />
                </button>
              </div>
            </div>

            {/* Terms Checkbox */}
            <div className="terms-group">
              <input
                type="checkbox"
                id="terms"
                className="terms-checkbox"
                required
              />
              <label htmlFor="terms" className="terms-text">
                I agree to the <a href="#" className="terms-link">Terms of Service</a> and <a href="#" className="terms-link">Privacy Policy</a>.
              </label>
            </div>

            {/* Submit Button */}
            <button type="submit" className="submit-btn">
              Create Account <ArrowRight size={20} />
            </button>

          </form>

          <p className="login-prompt">
            Already have an account? <Link to="/login" className="login-link">Sign In</Link>
          </p>

        </div>
      </div>
    </div>
  );
};

export default Register;
