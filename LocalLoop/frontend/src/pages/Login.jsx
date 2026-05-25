import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, ArrowRight, CheckCircle, Smartphone } from 'lucide-react';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userPhone, setUserPhone] = useState('');
  const [userAddress, setUserAddress] = useState('');
  const [userLandmark, setUserLandmark] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (userPhone) localStorage.setItem('userPhone', userPhone);
    if (userAddress) localStorage.setItem('userAddress', userAddress);
    if (userLandmark) localStorage.setItem('userLandmark', userLandmark);
    
    // Simulate setting username from email prefix for demo
    if (email && !localStorage.getItem('userName')) {
      const prefix = email.split('@')[0];
      localStorage.setItem('userName', prefix.charAt(0).toUpperCase() + prefix.slice(1));
    }
    
    localStorage.setItem('isAuthenticated', 'true');
    // Simulate login logic - just navigating for the UI demo
    if (email.includes('seller')) {
      navigate('/dashboard');
    } else {
      navigate('/');
    }
  };

  return (
    <div className="login-container">
      {/* Left Panel - Form */}
      <div className="login-left">
        <div className="login-card">
          <div className="login-header">
            <h1 className="login-title">Shop Sathi</h1>
            <p className="login-subtitle">Welcome back to the neighborhood.</p>
          </div>

          <form className="login-form" onSubmit={handleLogin}>
            <div className="login-input-group">
              <label className="login-label">Email</label>
              <div className="login-input-wrapper">
                <Mail className="login-input-icon" size={18} />
                <input 
                  type="email" 
                  placeholder="you@example.com" 
                  className="login-input"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="login-input-group">
              <label className="login-label">Phone Number</label>
              <div className="login-input-wrapper">
                <Smartphone className="login-input-icon" size={18} />
                <input 
                  type="tel" 
                  placeholder="+91 98765 43210" 
                  className="login-input"
                  value={userPhone}
                  onChange={(e) => setUserPhone(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="login-input-group">
              <label className="login-label">Delivery Address</label>
              <div className="login-input-wrapper">
                <input 
                  type="text" 
                  placeholder="e.g. 14/B, Hakim Para, Siliguri" 
                  className="login-input"
                  style={{ paddingLeft: '1rem' }}
                  value={userAddress}
                  onChange={(e) => setUserAddress(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="login-input-group">
              <label className="login-label">Landmark (Optional)</label>
              <div className="login-input-wrapper">
                <input 
                  type="text" 
                  placeholder="e.g. Near Kanchenjunga Stadium" 
                  className="login-input"
                  style={{ paddingLeft: '1rem' }}
                  value={userLandmark}
                  onChange={(e) => setUserLandmark(e.target.value)}
                />
              </div>
            </div>

            <div className="login-input-group">
              <label className="login-label">Password</label>
              <div className="login-input-wrapper">
                <Lock className="login-input-icon" size={18} />
                <input 
                  type="password" 
                  placeholder="••••••••" 
                  className="login-input"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="login-options">
              <label className="remember-me">
                <input type="checkbox" className="remember-checkbox" />
                <span className="remember-label">Remember Me</span>
              </label>
              <a href="#" className="forgot-password">Forgot Password?</a>
            </div>

            <button type="submit" className="login-btn">
              Sign In <ArrowRight size={18} />
            </button>
          </form>

          <div className="divider">Or continue with</div>

          <div className="social-login">
            <button type="button" className="social-btn">
              <svg viewBox="0 0 24 24" width="18" height="18" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              Google
            </button>
            <button type="button" className="social-btn">
              <svg viewBox="0 0 24 24" width="18" height="18" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.675 0h-21.35C.597 0 0 .597 0 1.325v21.351C0 23.403.597 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.597 1.323-1.325V1.325C24 .597 23.403 0 22.675 0z" fill="#1877F2"/>
              </svg>
              Facebook
            </button>
          </div>

          <p className="register-prompt">
            New to Shop Sathi? <Link to="/register" className="register-link">Create an account</Link>
          </p>
        </div>
      </div>

      {/* Right Panel - Image Overlay */}
      <div className="login-right">
        <img 
          src="https://images.unsplash.com/photo-1533900298318-6b8da08a523e?auto=format&fit=crop&q=80&w=1200" 
          alt="Siliguri Market" 
          className="market-image"
        />
        
        <div className="login-right-overlay">
          <div className="trusted-card">
            <div className="trusted-icon-wrapper">
              <CheckCircle size={24} />
            </div>
            <div className="trusted-content">
              <h4>Trusted Local Platform</h4>
              <p>Connecting Siliguri's vibrant markets.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
