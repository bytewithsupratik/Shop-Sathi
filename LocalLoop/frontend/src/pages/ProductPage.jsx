import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, MapPin, ShoppingBag, Heart, Share2, ShieldCheck, Clock, ArrowLeft } from 'lucide-react';
import { products, shops } from '../data/mockData';

const ProductPage = () => {
  const { id } = useParams();
  // For demo purposes, we'll just show the first shop and its products if ID isn't provided
  const shop = shops.find(s => s.id === parseInt(id)) || shops[0];
  const shopProducts = products.filter(p => p.shopId === shop.id);

  const [activeTab, setActiveTab] = useState('products');

  return (
    <div className="container py-8 animate-fade-in">
      <Link to="/shops" className="inline-flex items-center gap-2 text-secondary hover:text-primary mb-6 transition">
        <ArrowLeft size={18} /> Back to Shops
      </Link>

      {/* Shop Header */}
      <div className="card mb-8 overflow-hidden">
        <div className="h-48 md:h-64 relative">
          <img src={shop.image} alt={shop.name} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-6 w-full text-white">
            <div className="flex justify-between items-end">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="badge bg-primary text-white">{shop.category}</span>
                  {shop.verified && <span className="badge bg-green-500 text-white flex items-center gap-1"><ShieldCheck size={14} /> Verified</span>}
                </div>
                <h1 className="text-3xl md:text-4xl font-bold mb-2 text-white">{shop.name}</h1>
                <p className="flex items-center gap-2 text-gray-200">
                  <MapPin size={18} /> {shop.area}, Siliguri
                </p>
              </div>
              <div className="text-right hidden md:block">
                <div className="bg-white/20 backdrop-blur-md rounded-lg p-3 text-center">
                  <div className="text-2xl font-bold flex items-center justify-center gap-1">
                    <Star size={20} fill="#fbbf24" color="#fbbf24" /> {shop.rating}
                  </div>
                  <div className="text-sm text-gray-200">{shop.reviews} Reviews</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 flex text-center md:text-left">
          <div className="flex-1 py-4 px-6 border-r border-slate-200 dark:border-slate-700">
            <p className="text-sm text-secondary mb-1">Delivery Time</p>
            <p className="font-semibold flex items-center justify-center md:justify-start gap-2">
              <Clock size={16} className="text-primary" /> {shop.deliveryTime}
            </p>
          </div>
          <div className="flex-1 py-4 px-6 border-r border-slate-200 dark:border-slate-700 md:hidden">
            <p className="text-sm text-secondary mb-1">Rating</p>
            <p className="font-semibold flex items-center justify-center gap-1">
              <Star size={16} fill="#fbbf24" color="#fbbf24" /> {shop.rating}
            </p>
          </div>
          <div className="flex-1 py-4 px-6 flex items-center justify-center md:justify-end gap-4">
            <button className="icon-btn rounded-full p-2 bg-slate-100 dark:bg-slate-700 text-secondary hover:text-red-500 transition">
              <Heart size={20} />
            </button>
            <button className="icon-btn rounded-full p-2 bg-slate-100 dark:bg-slate-700 text-secondary hover:text-blue-500 transition">
              <Share2 size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-6 mb-6 border-b border-slate-200 dark:border-slate-700">
        <button
          className={`pb-3 font-semibold text-lg transition ${activeTab === 'products' ? 'text-primary border-b-2 border-primary' : 'text-secondary hover:text-primary'}`}
          onClick={() => setActiveTab('products')}
          style={activeTab === 'products' ? { color: 'var(--primary-color)', borderBottom: '2px solid var(--primary-color)' } : {}}
        >
          Products
        </button>
        <button
          className={`pb-3 font-semibold text-lg transition ${activeTab === 'about' ? 'text-primary border-b-2 border-primary' : 'text-secondary hover:text-primary'}`}
          onClick={() => setActiveTab('about')}
          style={activeTab === 'about' ? { color: 'var(--primary-color)', borderBottom: '2px solid var(--primary-color)' } : {}}
        >
          About Shop
        </button>
      </div>

      {/* Content */}
      {activeTab === 'products' && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {shopProducts.length > 0 ? shopProducts.map(product => (
            <div key={product.id} className="card flex flex-col">
              <div className="relative aspect-square overflow-hidden">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover transition-transform hover:scale-105 duration-300" />
                {product.rating > 4.7 && (
                  <div className="absolute top-2 left-2 badge bg-yellow-400 text-yellow-900 shadow-sm text-xs">Best Seller</div>
                )}
              </div>
              <div className="p-4 flex-1 flex flex-col">
                <h3 className="text-md font-semibold mb-1 line-clamp-2" style={{ fontSize: '1rem' }}>{product.name}</h3>
                <div className="flex items-center gap-1 text-sm text-secondary mb-3">
                  <Star size={14} fill="#fbbf24" color="#fbbf24" /> {product.rating}
                </div>
                <div className="mt-auto flex items-center justify-between">
                  <span className="text-xl font-bold text-primary">₹{product.price}</span>
                  <button className="btn btn-primary" style={{ padding: '0.5rem 1rem', borderRadius: '0.5rem' }}>
                    Add <ShoppingBag size={16} className="ml-1" />
                  </button>
                </div>
              </div>
            </div>
          )) : (
            <div className="col-span-full py-12 text-center text-secondary">
              <ShoppingBag size={48} className="mx-auto mb-4 opacity-20" />
              <h3>No products available yet.</h3>
              <p>This shop hasn't uploaded any products.</p>
            </div>
          )}
        </div>
      )}

      {activeTab === 'about' && (
        <div className="card p-8">
          <h3 className="mb-4">About {shop.name}</h3>
          <p className="text-secondary mb-6 leading-relaxed">
            Welcome to {shop.name}, your trusted local destination in {shop.area}, Siliguri. We have been serving the community with high-quality {shop.category.toLowerCase()} products. By shopping with us on Shop Sathi, you are directly supporting a local Siliguri business.
          </p>

          <h4 className="mb-3">Store Details</h4>
          <ul className="space-y-3 text-secondary">
            <li className="flex items-center gap-3"><MapPin size={18} className="text-primary" /> {shop.area}, Siliguri, West Bengal</li>
            <li className="flex items-center gap-3"><Clock size={18} className="text-primary" /> Open: 9:00 AM - 9:00 PM</li>
            <li className="flex items-center gap-3"><ShieldCheck size={18} className="text-primary" /> FSSAI / Trade License Verified</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default ProductPage;
