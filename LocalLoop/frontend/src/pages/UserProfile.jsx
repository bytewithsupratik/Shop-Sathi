import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { 
  User, Package, MapPin, Heart, Settings, Edit2, 
  Calendar, Star, CheckCircle, ShoppingBag, Store, Tag, 
  Truck, Utensils, ChevronRight, ArrowRight, Coffee, Cake 
} from 'lucide-react';
import { recentOrders } from '../data/mockData';
import './UserProfile.css';

const UserProfile = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [userOrders, setUserOrders] = useState([]);
  const [totalSpent, setTotalSpent] = useState(0);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
    const orders = JSON.parse(localStorage.getItem('userOrders') || '[]');
    setUserOrders(orders);
    
    const spent = orders.reduce((acc, order) => acc + order.amount, 0);
    setTotalSpent(spent);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    navigate('/login');
  };

  return (
    <div className="profile-page animate-fade-in">
      <div className="container profile-container">
        
        {/* Left Sidebar */}
        <aside className="profile-sidebar">
          <nav className="sidebar-menu">
            <Link to="/profile" className={`sidebar-link ${location.pathname === '/profile' ? 'active' : ''}`}>
              <User size={20} /> My Profile
            </Link>
            <Link to="/orders" className={`sidebar-link ${location.pathname === '/orders' ? 'active' : ''}`}>
              <Package size={20} /> My Orders
            </Link>
            <Link to="/addresses" className={`sidebar-link ${location.pathname === '/addresses' ? 'active' : ''}`}>
              <MapPin size={20} /> Saved Addresses
            </Link>
            <Link to="/wishlist" className={`sidebar-link ${location.pathname === '/wishlist' ? 'active' : ''}`}>
              <Heart size={20} /> Wishlist
            </Link>
            
            <div className="sidebar-divider"></div>
            
            <button onClick={handleLogout} className="sidebar-link" style={{ background: 'none', border: 'none', width: '100%', cursor: 'pointer' }}>
              <Settings size={20} /> Settings (Logout)
            </button>
          </nav>
        </aside>

          {/* Main Content */}
        <div className="profile-content">
          
          {location.pathname === '/profile' && (
            <>
              {/* Header Card */}
              <div className="profile-header-card">
            <div className="profile-avatar-wrapper">
              <img 
                src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=250" 
                alt="User Profile" 
                className="profile-avatar"
              />
              <div className="avatar-edit-btn">
                <Edit2 size={14} />
              </div>
            </div>

            <div className="profile-info">
              <h1>{localStorage.getItem('userName') || 'User'}</h1>
              <div className="profile-meta">
                <span className="profile-meta-item">
                  <MapPin size={16} /> {localStorage.getItem('userAddress') || 'Hakim Para, Siliguri'}
                </span>
                <span>•</span>
                <span className="profile-meta-item">
                  <Calendar size={16} /> Member since 2023
                </span>
              </div>
              <div className="profile-badges">
                <span className="badge-pill badge-guide">
                  <Star size={12} fill="currentColor" /> Local Guide
                </span>
                <span className="badge-pill badge-verified">
                  <CheckCircle size={12} /> Verified
                </span>
              </div>
            </div>
          </div>

          {/* Stats Row */}
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-icon-wrapper icon-red">
                <ShoppingBag size={24} />
              </div>
              <div className="stat-value">{userOrders.length}</div>
              <div className="stat-label">Total Orders</div>
            </div>

            <div className="stat-card">
              <div className="stat-icon-wrapper icon-teal">
                <Store size={24} />
              </div>
              <div className="stat-value">{new Set(userOrders.map(o => o.shopName)).size}</div>
              <div className="stat-label">Unique Shops</div>
            </div>

            <div className="stat-card">
              <div className="stat-icon-wrapper icon-yellow">
                <Tag size={24} />
              </div>
              <div className="stat-value">{Math.floor(totalSpent / 10)}</div>
              <div className="stat-label">Sathi Points</div>
            </div>
          </div>

          {/* Recent Orders Card */}
          <div className="orders-card">
            <div className="orders-header">
              <h2>Recent Orders</h2>
              <Link to="/orders" className="view-all-link">
                View All <ArrowRight size={18} />
              </Link>
            </div>

            <div className="orders-list">
              {userOrders.length > 0 ? userOrders.map(order => {
                const iconMap = {
                  truck: <Truck size={24} />,
                  utensils: <Utensils size={24} />,
                  cake: <Cake size={24} />,
                  coffee: <Coffee size={24} />,
                };
                return (
                  <div className="order-item" key={order.id}>
                    <div className="order-icon-box">
                      {iconMap[order.iconType] || <Package size={24} />}
                    </div>
                    <div className="order-details">
                      <div className="order-title">{order.shopName}</div>
                      <div className="order-meta">Order #{order.id} • {order.date}</div>
                    </div>
                    <div className="order-status-col">
                      <div className="order-price">₹{order.amount.toFixed(2)}</div>
                      <div className={`status-badge ${order.status === 'out' ? 'status-out' : 'status-delivered'}`}>
                        {order.statusLabel}
                      </div>
                    </div>
                    <ChevronRight className="order-chevron" size={20} />
                  </div>
                );
              }) : (
                <div style={{ textAlign: 'center', padding: '2rem', color: '#94a3b8' }}>
                  <Package size={48} style={{ margin: '0 auto 1rem', opacity: 0.2 }} />
                  <p>You haven't placed any orders yet.</p>
                </div>
              )}
            </div>
          </div>
          </>
          )}

          {/* Orders View */}
          {location.pathname === '/orders' && (
            <div className="orders-card">
              <div className="orders-header">
                <h2>All My Orders</h2>
              </div>
              <div className="orders-list">
                {userOrders.length > 0 ? userOrders.map(order => {
                  const iconMap = {
                    truck: <Truck size={24} />,
                    utensils: <Utensils size={24} />,
                    cake: <Cake size={24} />,
                    coffee: <Coffee size={24} />,
                  };
                  return (
                    <div className="order-item" key={order.id}>
                      <div className="order-icon-box">
                        {iconMap[order.iconType] || <Package size={24} />}
                      </div>
                      <div className="order-details">
                        <div className="order-title">{order.shopName}</div>
                        <div className="order-meta">Order #{order.id} • {order.date}</div>
                      </div>
                      <div className="order-status-col">
                        <div className="order-price">₹{order.amount.toFixed(2)}</div>
                        <div className={`status-badge ${order.status === 'out' ? 'status-out' : 'status-delivered'}`}>
                          {order.statusLabel}
                        </div>
                      </div>
                      <ChevronRight className="order-chevron" size={20} />
                    </div>
                  );
                }) : (
                  <div style={{ textAlign: 'center', padding: '2rem', color: '#94a3b8' }}>
                    <Package size={48} style={{ margin: '0 auto 1rem', opacity: 0.2 }} />
                    <p>You haven't placed any orders yet.</p>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Addresses View */}
          {location.pathname === '/addresses' && (
            <div className="orders-card">
              <div className="orders-header">
                <h2>Saved Addresses</h2>
              </div>
              <div style={{ background: '#f8fafc', padding: '1.5rem', borderRadius: '0.75rem', border: '1px solid #e2e8f0', display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                <MapPin size={24} color="#c2410c" style={{ marginTop: '0.2rem' }} />
                <div>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: '700', marginBottom: '0.5rem', color: '#1e293b' }}>Home (Default)</h3>
                  <p style={{ color: '#475569', marginBottom: '0.25rem' }}>{localStorage.getItem('userName') || 'User'}</p>
                  <p style={{ color: '#64748b' }}>{localStorage.getItem('userAddress') || 'Hakim Para'}</p>
                  <p style={{ color: '#64748b' }}>{localStorage.getItem('userLandmark') ? `Near ${localStorage.getItem('userLandmark')}` : 'Siliguri, West Bengal'}</p>
                  <p style={{ color: '#64748b', marginTop: '0.5rem' }}>Phone: {localStorage.getItem('userPhone') || '+91 9876543210'}</p>
                  <div style={{ marginTop: '1rem', display: 'flex', gap: '1rem' }}>
                    <button style={{ background: 'none', border: 'none', color: '#c2410c', fontWeight: '600', cursor: 'pointer' }}>Edit</button>
                    <button style={{ background: 'none', border: 'none', color: '#ef4444', fontWeight: '600', cursor: 'pointer' }}>Remove</button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Wishlist View */}
          {location.pathname === '/wishlist' && (
            <div className="orders-card">
              <div className="orders-header">
                <h2>My Wishlist</h2>
              </div>
              <div style={{ textAlign: 'center', padding: '4rem 2rem', color: '#94a3b8' }}>
                <Heart size={48} style={{ margin: '0 auto 1rem', opacity: 0.2 }} />
                <h3 style={{ fontSize: '1.25rem', color: '#475569', marginBottom: '0.5rem' }}>Your wishlist is empty</h3>
                <p>Save items you like to your wishlist to easily find them later.</p>
                <Link to="/shops" style={{ display: 'inline-block', marginTop: '1.5rem', padding: '0.75rem 1.5rem', backgroundColor: '#c2410c', color: 'white', borderRadius: '0.5rem', textDecoration: 'none', fontWeight: '600' }}>Browse Shops</Link>
              </div>
            </div>
          )}

        </div>

      </div>
    </div>
  );
};

export default UserProfile;
