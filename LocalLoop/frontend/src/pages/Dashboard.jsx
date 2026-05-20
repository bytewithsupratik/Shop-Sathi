import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Store, LayoutDashboard, Package, ShoppingCart, TrendingUp, Settings, Plus, ArrowLeft, Bell } from 'lucide-react';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="dashboard-layout animate-fade-in">
      {/* Sidebar */}
      <aside className="sidebar">
        <Link to="/" className="flex items-center gap-2 mb-10 text-xl font-bold">
          <div className="bg-primary text-white p-2 rounded-lg">
            <Store size={28} />
          </div>
          Shop Sathi <span className="text-xs font-normal text-secondary bg-gray-100 px-2 py-1 rounded-full">Seller</span>
        </Link>

        <nav>
          <button
            className={`sidebar-link w-full text-left ${activeTab === 'overview' ? 'active' : ''}`}
            onClick={() => setActiveTab('overview')}
          >
            <LayoutDashboard size={20} /> Overview
          </button>
          <button
            className={`sidebar-link w-full text-left ${activeTab === 'products' ? 'active' : ''}`}
            onClick={() => setActiveTab('products')}
          >
            <Package size={20} /> Products
          </button>
          <button
            className={`sidebar-link w-full text-left ${activeTab === 'orders' ? 'active' : ''}`}
            onClick={() => setActiveTab('orders')}
          >
            <ShoppingCart size={20} /> Orders
            <span className="ml-auto bg-primary text-white text-xs py-0.5 px-2 rounded-full">3</span>
          </button>
          <button
            className={`sidebar-link w-full text-left ${activeTab === 'analytics' ? 'active' : ''}`}
            onClick={() => setActiveTab('analytics')}
          >
            <TrendingUp size={20} /> Analytics
          </button>
          <button
            className={`sidebar-link w-full text-left ${activeTab === 'settings' ? 'active' : ''}`}
            onClick={() => setActiveTab('settings')}
          >
            <Settings size={20} /> Settings
          </button>
        </nav>

        <div className="mt-auto pt-8">
          <Link to="/" className="flex items-center gap-2 text-secondary hover:text-primary transition">
            <ArrowLeft size={16} /> Back to Customer Site
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="dashboard-content">
        <header className="flex justify-between items-center mb-8">
          <div>
            <h2 className="m-0 text-2xl">Welcome back, HillCart Grocery!</h2>
            <p className="text-secondary">Here's what's happening with your store today.</p>
          </div>
          <div className="flex items-center gap-4">
            <button className="icon-btn p-2 text-secondary bg-white rounded-full shadow-sm">
              <Bell size={20} />
            </button>
            <img src="https://ui-avatars.com/api/?name=HillCart+Grocery&background=f97316&color=fff" alt="Profile" className="w-10 h-10 rounded-full border-2 border-white shadow-sm" />
          </div>
        </header>

        {activeTab === 'overview' && (
          <div className="animate-fade-in">
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              {[
                { label: 'Total Revenue', value: '₹12,450', change: '+15%', isPositive: true },
                { label: 'Total Orders', value: '142', change: '+8%', isPositive: true },
                { label: 'Active Products', value: '48', change: '0%', isPositive: true },
                { label: 'Store Views', value: '1,204', change: '-2%', isPositive: false }
              ].map((stat, idx) => (
                <div key={idx} className="card p-6 border-none shadow-sm">
                  <p className="text-secondary text-sm font-medium mb-1">{stat.label}</p>
                  <h3 className="text-2xl font-bold mb-2">{stat.value}</h3>
                  <p className={`text-xs font-semibold ${stat.isPositive ? 'text-green-500' : 'text-red-500'}`}>
                    {stat.change} <span className="text-secondary font-normal ml-1">vs last week</span>
                  </p>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Chart Placeholder */}
              <div className="card p-6 col-span-2 border-none shadow-sm flex flex-col">
                <h3 className="text-lg mb-4">Revenue Overview</h3>
                <div className="flex-1 bg-slate-50 dark:bg-slate-800 rounded-lg flex items-center justify-center border border-dashed border-slate-200 dark:border-slate-700 min-h-[300px]">
                  <p className="text-secondary flex items-center gap-2">
                    <TrendingUp /> Analytics chart will appear here
                  </p>
                </div>
              </div>

              {/* Recent Orders */}
              <div className="card p-6 border-none shadow-sm">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg m-0">Recent Orders</h3>
                  <button className="text-primary text-sm font-semibold">View All</button>
                </div>
                <div className="space-y-4">
                  {[
                    { id: '#1042', time: '10 mins ago', total: '₹450', status: 'Pending' },
                    { id: '#1041', time: '1 hour ago', total: '₹120', status: 'Preparing' },
                    { id: '#1040', time: '3 hours ago', total: '₹850', status: 'Delivered' },
                    { id: '#1039', time: '5 hours ago', total: '₹320', status: 'Delivered' }
                  ].map((order, idx) => (
                    <div key={idx} className="flex justify-between items-center pb-4 border-b border-slate-100 dark:border-slate-700 last:border-0 last:pb-0">
                      <div>
                        <p className="font-semibold text-sm">{order.id}</p>
                        <p className="text-xs text-secondary">{order.time}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-sm">{order.total}</p>
                        <span className={`text-[10px] px-2 py-0.5 rounded-full font-medium
                          ${order.status === 'Pending' ? 'bg-yellow-100 text-yellow-700' :
                            order.status === 'Preparing' ? 'bg-blue-100 text-blue-700' :
                              'bg-green-100 text-green-700'}
                        `}>
                          {order.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'products' && (
          <div className="animate-fade-in card p-8 shadow-sm border-none">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl m-0">Product Management</h3>
              <button className="btn btn-primary shadow-none py-2 px-4 text-sm">
                <Plus size={16} className="mr-1" /> Add Product
              </button>
            </div>

            <div className="bg-slate-50 dark:bg-slate-800 p-12 text-center rounded-xl border border-dashed border-slate-300 dark:border-slate-600">
              <Package size={48} className="mx-auto text-slate-300 mb-4" />
              <h4 className="mb-2">Manage your inventory here</h4>
              <p className="text-secondary max-w-md mx-auto mb-6">Upload photos, set prices, and update stock status for your items directly from the dashboard.</p>
              <button className="btn btn-outline py-2 px-4 text-sm">Upload CSV</button>
            </div>
          </div>
        )}

        {/* Other tabs would go here */}
        {(activeTab === 'orders' || activeTab === 'analytics' || activeTab === 'settings') && (
          <div className="animate-fade-in flex items-center justify-center h-64 card shadow-sm border-none">
            <p className="text-secondary text-lg">The {activeTab} panel is under construction.</p>
          </div>
        )}
      </main>
    </div>
  );
};

export default Dashboard;
