import React, { useState, useEffect } from 'react';
import { Routes, Route, Link, useLocation, Navigate } from 'react-router-dom';
import { ShoppingCart, Bell, User, Search, Store, Home, MapPin, Moon, Sun } from 'lucide-react';
import LandingPage from './pages/LandingPage';
import ShopDiscovery from './pages/ShopDiscovery';
import ProductPage from './pages/ProductPage';
import SellerDashboard from './pages/SellerDashboard';
import CartCheckout from './pages/CartCheckout';
import Register from './pages/Register';
import Login from './pages/Login';
import UserProfile from './pages/UserProfile';
import './index.css';

function App() {
  const ProtectedRoute = ({ children }) => {
    const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
    if (!isAuthenticated) {
      return <Navigate to="/login" replace />;
    }
    return children;
  };
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
  const isAuth = location.pathname.includes('/register') || location.pathname.includes('/login') || location.pathname.includes('/cart');
  const hideNavAndFooter = isDashboard || isAuth;

  return (
    <div className="app-container">
      {!hideNavAndFooter && (
        <nav className="navbar">
          <div className="container flex justify-between items-center">
            <Link to="/" className="logo flex items-center gap-3">
              <div style={{ background: 'linear-gradient(135deg, var(--primary-color), var(--primary-hover))', color: 'white', padding: '0.5rem', borderRadius: '0.75rem', boxShadow: '0 4px 10px rgba(249, 115, 22, 0.3)' }}>
                <Store size={24} />
              </div>
              <span style={{ paddingLeft: '20px', fontFamily: 'Outfit, sans-serif', fontSize: '1.75rem', fontWeight: '800', background: 'linear-gradient(to right, var(--text-primary), var(--primary-color))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', letterSpacing: '-0.02em' }}>
                Shop Sathi
              </span>
            </Link>


            <div className="nav-links items-center gap-6">
              <Link to="/shops" className="nav-link font-medium hover:scale-105 transition-transform" style={{ transition: 'var(--transition)' }}>Explore</Link>

              <div className="flex items-center gap-2 ml-4 pl-4 border-l" style={{ borderColor: 'var(--border-color)' }}>
                <button onClick={toggleTheme} className="icon-btn hover:scale-110 transition-transform" style={{ padding: '0.10rem', color: 'var(--text-secondary)', transition: 'var(--transition)' }} title="Toggle Theme">
                  {isDarkMode ? <Sun size={20} className="text-yellow-500" /> : <Moon size={20} />}
                </button>

                <button className="icon-btn relative hover:scale-110 transition-transform" style={{ padding: '0.5rem', color: 'var(--text-secondary)', transition: 'var(--transition)' }} title="Notifications">
                  <Bell size={20} />
                  <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white dark:border-slate-900"></span>
                </button>

                <Link to="/cart" className="icon-btn relative hover:scale-110 transition-transform" title="Cart">
                  <ShoppingCart size={20} />
                  {cartCount > 0 && (
                    <span className="absolute flex items-center justify-center text-xs text-white font-bold rounded-full bg-primary-color">
                    </span>
                  )}
                </Link>

                <Link to="/profile" className="user-btn ml-2 hover:scale-110 transition-transform" style={{ transition: 'var(--transition)' }} title="Account">
                  <div style={{ background: 'var(--bg-secondary)', padding: '0.5rem', borderRadius: '50%', border: '1px solid var(--border-color)' }}>
                    <User size={20} style={{ color: 'var(--text-primary)' }} />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </nav>
      )
      }

      <main className="main-content">
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<ProtectedRoute><LandingPage /></ProtectedRoute>} />
          <Route path="/shops" element={<ProtectedRoute><ShopDiscovery /></ProtectedRoute>} />
          <Route path="/product/:id" element={<ProtectedRoute><ProductPage /></ProtectedRoute>} />
          <Route path="/dashboard/*" element={<ProtectedRoute><SellerDashboard /></ProtectedRoute>} />
          <Route path="/cart" element={<ProtectedRoute><CartCheckout /></ProtectedRoute>} />
          <Route path="/profile" element={<ProtectedRoute><UserProfile /></ProtectedRoute>} />
        </Routes>
      </main>

      {
        !hideNavAndFooter && (
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
        )
      }
    </div >
  );
}

export default App;
