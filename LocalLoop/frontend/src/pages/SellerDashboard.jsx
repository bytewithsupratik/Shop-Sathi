import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  LayoutDashboard, Package, ShoppingCart, BarChart2, Settings, 
  Plus, HelpCircle, LogOut, Calendar, Upload, 
  Calculator, ShoppingBag, Wallet, CheckCircle, 
  AlertTriangle, Truck, Megaphone, TrendingUp
} from 'lucide-react';
import './SellerDashboard.css';

const SellerDashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="seller-dashboard">
      {/* Sidebar */}
      <aside className="seller-sidebar">
        <div className="seller-profile">
          <img src="https://ui-avatars.com/api/?name=HillCart+Grocery&background=f97316&color=fff" alt="Profile" className="seller-avatar" />
          <div>
            <h2 className="seller-name">HillCart Grocery</h2>
            <p className="seller-role">Siliguri Merchant</p>
          </div>
        </div>

        <nav className="seller-nav">
          <button className="seller-nav-item active">
            <LayoutDashboard size={20} /> Dashboard
          </button>
          <button className="seller-nav-item">
            <Package size={20} /> Inventory
          </button>
          <button className="seller-nav-item">
            <ShoppingCart size={20} /> Orders
          </button>
          <button className="seller-nav-item">
            <BarChart2 size={20} /> Analytics
          </button>
          <button className="seller-nav-item">
            <Settings size={20} /> Settings
          </button>
        </nav>

        <div className="seller-sidebar-bottom">
          <button className="btn-add-product">
            <Plus size={18} /> Add New Product
          </button>
          <button className="seller-nav-item">
            <HelpCircle size={20} /> Help Center
          </button>
          <button className="seller-nav-item logout" onClick={() => navigate('/')}>
            <LogOut size={20} /> Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="seller-main">
        {/* Header */}
        <div className="seller-header">
          <div className="seller-greeting">
            <h1>Good morning, HillCart<br/>Grocery!</h1>
            <p>Here's what's happening with your store today.</p>
          </div>
          <div className="header-actions">
            <button className="action-btn">
              <Calendar size={16} /> Today
            </button>
            <button className="action-btn ghost">
              <Upload size={16} /> Upload Product
            </button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="stats-grid">
          {/* Stat 1 */}
          <div className="stat-card red">
            <div className="stat-header">
              <span className="stat-title">Total Sales</span>
              <div className="stat-icon red"><Calculator size={18} /></div>
            </div>
            <div className="stat-value">₹12,450</div>
            <div className="stat-trend trend-up">
              <TrendingUp size={14} /> +14.5% from yesterday
            </div>
          </div>

          {/* Stat 2 */}
          <div className="stat-card aqua">
            <div className="stat-header">
              <span className="stat-title">Active Orders</span>
              <div className="stat-icon aqua"><ShoppingBag size={18} /></div>
            </div>
            <div className="stat-value">28</div>
            <div className="stat-trend trend-neutral">
              <div style={{ width: '6px', height: '6px', backgroundColor: '#0f766e', borderRadius: '50%' }}></div>
              12 processing now
            </div>
          </div>

          {/* Stat 3 */}
          <div className="stat-card yellow">
            <div className="stat-header">
              <span className="stat-title">Revenue (This Week)</span>
              <div className="stat-icon yellow"><Wallet size={18} /></div>
            </div>
            <div className="stat-value">₹84,200</div>
            <div className="stat-trend trend-up">
              <TrendingUp size={14} /> +5.2% from last week
            </div>
          </div>

          {/* Stat 4 */}
          <div className="stat-card">
            <div className="stat-header">
              <span className="stat-title">Store Rating</span>
              <div className="rating-tag">⭐ 4.8</div>
            </div>
            <div className="rating-text">
              Excellent <CheckCircle size={20} color="#0d9488" />
            </div>
          </div>
        </div>

        {/* Middle Section */}
        <div className="middle-grid">
          {/* Revenue Chart */}
          <div className="dashboard-card">
            <div className="card-header">
              <h3 className="card-title">Revenue Overview</h3>
              <select className="card-dropdown">
                <option>Last 7 Days</option>
                <option>Last 30 Days</option>
              </select>
            </div>
            <div className="chart-container">
              <div className="chart-y-axis">
                <span>₹15k</span>
                <span>₹10k</span>
                <span>₹5k</span>
                <span>₹0</span>
              </div>
              <div className="chart-grid-line" style={{ top: '33.33%' }}></div>
              <div className="chart-grid-line" style={{ top: '66.66%' }}></div>
              
              <svg className="chart-svg" viewBox="0 0 100 100" preserveAspectRatio="none">
                <path className="chart-area" d="M 0,100 L 0,80 Q 15,85 25,75 T 50,60 T 75,40 T 100,30 L 100,100 Z" />
                <circle className="chart-dot" cx="0" cy="80" r="1.5" />
                <circle className="chart-dot" cx="25" cy="75" r="1.5" />
                <circle className="chart-dot" cx="50" cy="60" r="1.5" />
                <circle className="chart-dot" cx="75" cy="40" r="1.5" />
                <circle className="chart-dot" cx="100" cy="30" r="1.5" />
              </svg>

              <div className="chart-x-axis">
                <span>Mon</span>
                <span>Tue</span>
                <span>Wed</span>
                <span>Thu</span>
                <span>Fri</span>
                <span>Sat</span>
                <span>Sun</span>
              </div>
            </div>
          </div>

          {/* Alerts */}
          <div className="dashboard-card">
            <div className="card-header" style={{ marginBottom: '1rem' }}>
              <h3 className="card-title">Store Alerts</h3>
            </div>
            <div className="alerts-list">
              <div className="alert-item danger">
                <div className="alert-icon"><AlertTriangle size={18} /></div>
                <div className="alert-content">
                  <h4>Low Stock Alert</h4>
                  <p>Aashirvaad Atta (5kg) is running low. Only 3 units left.</p>
                </div>
              </div>

              <div className="alert-item success">
                <div className="alert-icon"><Truck size={18} /></div>
                <div className="alert-content">
                  <h4>Delivery Partner Assigned</h4>
                  <p>Raju has been assigned to pick up Order #4892.</p>
                </div>
              </div>

              <div className="alert-item warning">
                <div className="alert-icon"><Megaphone size={18} /></div>
                <div className="alert-content">
                  <h4>Weekend Sale Setup</h4>
                  <p>Don't forget to activate your 'Sunday Fresh' discounts.</p>
                </div>
              </div>
            </div>
            <Link to="#" className="view-all-alerts">View All Alerts</Link>
          </div>
        </div>
        
        {/* Recent Orders - just a placeholder block to match bottom of screen */}
        <div className="dashboard-card">
          <div className="card-header">
            <h3 className="card-title">Recent Orders</h3>
            <Link to="#" className="view-all-alerts" style={{ margin: 0 }}>View All &gt;</Link>
          </div>
        </div>

      </main>
    </div>
  );
};

export default SellerDashboard;
