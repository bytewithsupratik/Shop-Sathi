import React, { useState, useEffect } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Bell, User, Search, Store, Home, MapPin, Moon, Sun } from 'lucide-react';
import LandingPage from './pages/LandingPage';
import ShopDiscovery from './pages/ShopDiscovery';
import ProductPage from './pages/ProductPage';
import SellerDashboard from './pages/SellerDashboard';
import CartCheckout from './pages/CartCheckout';
import Register from './pages/Register';
import Login from './pages/Login';
import './index.css';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [cartCount, setCartCount] = useState(2);
  const location = useLocation();

  useEffect(() => {
    if (isDarkMode) {
      document.body.setAttribute('data-theme', 'dark');
    } else {
      document.body.removeAttribute('data-theme');
    }
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  // Don't show regular navbar on dashboard or auth pages
  const isDashboard = location.pathname.includes('/dashboard');
  const isAuth = location.pathname.includes('/register') || location.pathname.includes('/login');
  const hideNavAndFooter = isDashboard || isAuth;

  return (
    <div className="app-container">
      {!hideNavAndFooter && (
        <nav className="navbar">
          <div className="container flex justify-between items-center">
            <Link to="/" className="logo flex items-center gap-2">
              <div style={{ backgroundColor: 'var(--primary-color)', color: 'white', padding: '0.5rem', borderRadius: '0.5rem' }}>
                <Store size={24} />
              </div>
              <span style={{ fontSize: '1.5rem', fontWeight: 'bold', background: 'linear-gradient(to right, var(--primary-color), var(--accent-color))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                Shop Sathi
              </span>
            </Link>


            <div className="nav-links items-center">
              <Link to="/shops" className="nav-link">Explore</Link>
              <Link to="/dashboard" target="_blank" rel="noopener noreferrer" className="nav-link">Sell</Link>

              <button onClick={toggleTheme} className="icon-btn" style={{ padding: '0.5rem', color: 'var(--text-secondary)' }}>
                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>

              <button className="icon-btn relative" style={{ padding: '0.5rem', color: 'var(--text-secondary)' }}>
                <Bell size={20} />
                <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>

              <Link to="/cart" className="icon-btn relative" style={{ padding: '0.5rem', color: 'var(--text-secondary)' }}>
                <ShoppingCart size={20} />
                {cartCount > 0 && (
                  <span className="absolute" style={{ top: '-5px', right: '-5px' }}>
                  </span>
                )}
              </Link>

              <Link to="/register" className="user-btn ml-2">
                <User size={24} style={{ color: 'var(--text-secondary)' }} />
              </Link>
            </div>
          </div>
        </nav>
      )}

      <main className="main-content">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/shops" element={<ShopDiscovery />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/dashboard/*" element={<SellerDashboard />} />
          <Route path="/cart" element={<CartCheckout />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </main>

      {!hideNavAndFooter && (
        <footer className="footer text-center">
          <div className="container">
            <div className="grid grid-cols-4 gap-8 mb-8 text-left">
              <div>
                <h3 className="mb-4 flex items-center gap-2">
                  <Store className="text-primary" /> Shop Sathi
                </h3>
                <p className="text-secondary">Empowering Siliguri's local businesses digitally.</p>
              </div>
              <div>
                <h4 className="mb-4">Explore</h4>
                <ul className="text-secondary flex-col gap-2 flex">
                  <li><Link to="/shops">Shops in Sevoke Road</Link></li>
                  <li><Link to="/shops">Bidhan Market Fashion</Link></li>
                  <li><Link to="/shops">Pradhan Nagar Food</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="mb-4">For Sellers</h4>
                <ul className="text-secondary flex-col gap-2 flex">
                  <li><Link to="/dashboard">Seller Dashboard</Link></li>
                  <li><Link to="/">How it works</Link></li>
                  <li><Link to="/">Pricing</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="mb-4">Contact</h4>
                <ul className="text-secondary flex-col gap-2 flex">
                  <li>support@Shop Sathi.in</li>
                  <li>+91 98765 43210</li>
                  <li>City Center, Siliguri</li>
                </ul>
              </div>
            </div>
            <div className="pt-4 border-t" style={{ borderColor: 'var(--border-color)', color: 'var(--text-secondary)' }}>
              &copy; 2026 Shop Sathi Siliguri. All rights reserved.
            </div>
          </div>
        </footer>
      )}
    </div>
  );
}

export default App;
