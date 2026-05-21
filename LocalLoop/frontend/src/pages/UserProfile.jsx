import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  User, Package, MapPin, Heart, Settings, Edit2, 
  Calendar, Star, CheckCircle, ShoppingBag, Store, Tag, 
  Truck, Utensils, ChevronRight, ArrowRight, Coffee, Cake 
} from 'lucide-react';
import { recentOrders } from '../data/mockData';
import './UserProfile.css';

const UserProfile = () => {
  const navigate = useNavigate();

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
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
            <Link to="/profile" className="sidebar-link active">
              <User size={20} /> My Profile
            </Link>
            <Link to="/orders" className="sidebar-link">
              <Package size={20} /> My Orders
            </Link>
            <Link to="/addresses" className="sidebar-link">
              <MapPin size={20} /> Saved Addresses
            </Link>
            <Link to="/wishlist" className="sidebar-link">
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
                  <MapPin size={16} /> Hakim Para, Siliguri
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
              <div className="stat-value">42</div>
              <div className="stat-label">Total Orders</div>
            </div>

            <div className="stat-card">
              <div className="stat-icon-wrapper icon-teal">
                <Store size={24} />
              </div>
              <div className="stat-value">15</div>
              <div className="stat-label">Saved Shops</div>
            </div>

            <div className="stat-card">
              <div className="stat-icon-wrapper icon-yellow">
                <Tag size={24} />
              </div>
              <div className="stat-value">850</div>
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
              {recentOrders.map(order => {
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
              })}
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default UserProfile;
