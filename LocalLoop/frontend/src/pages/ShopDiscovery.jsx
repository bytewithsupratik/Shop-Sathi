import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Filter, Search, MapPin, Star, ShieldCheck } from 'lucide-react';
import { shops, categories } from '../data/mockData';

const ShopDiscovery = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredShops = shops.filter(shop => {
    const matchesCategory = activeCategory === 'All' || shop.category === activeCategory;
    const matchesSearch = shop.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          shop.area.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="container py-8 animate-fade-in">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="mb-2">Discover Local Shops</h1>
          <p className="text-secondary">Find the best stores around Siliguri</p>
        </div>
        
        <div className="flex w-full md:w-auto gap-4">
          <div className="relative flex-1 md:w-64">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-secondary" size={18} />
            <input 
              type="text" 
              className="form-control pl-10" 
              placeholder="Search shops or areas..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <button className="btn btn-outline" style={{ padding: '0.5rem 1rem' }}>
            <Filter size={18} /> Filters
          </button>
        </div>
      </div>

      {/* Categories */}
      <div className="flex gap-4 overflow-x-auto pb-4 mb-8 no-scrollbar" style={{ scrollbarWidth: 'none' }}>
        <button 
          className={`px-4 py-2 rounded-full whitespace-nowrap font-medium transition ${activeCategory === 'All' ? 'bg-primary text-white' : 'bg-secondary text-secondary hover:bg-gray-200'}`}
          style={activeCategory === 'All' ? { backgroundColor: 'var(--primary-color)' } : {}}
          onClick={() => setActiveCategory('All')}
        >
          All Categories
        </button>
        {categories.map(cat => (
          <button 
            key={cat.name}
            className={`px-4 py-2 rounded-full whitespace-nowrap font-medium transition ${activeCategory === cat.name ? 'bg-primary text-white' : 'bg-secondary text-secondary hover:bg-gray-200'}`}
            style={activeCategory === cat.name ? { backgroundColor: 'var(--primary-color)' } : {}}
            onClick={() => setActiveCategory(cat.name)}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* Shop Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredShops.map(shop => (
          <Link to={`/product/${shop.id}`} key={shop.id} className="card flex flex-col h-full">
            <div className="card-img-wrapper" style={{ height: '160px' }}>
              <img src={shop.image} alt={shop.name} className="card-img" />
              {shop.verified && (
                <div className="absolute top-2 right-2 bg-white text-green-600 p-1 rounded-full shadow-md" title="Verified Seller">
                  <ShieldCheck size={16} />
                </div>
              )}
            </div>
            <div className="card-content flex-1 flex flex-col">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-bold line-clamp-1">{shop.name}</h3>
                <div className="flex items-center gap-1 text-sm font-bold bg-yellow-100 text-yellow-700 px-2 py-1 rounded-md">
                  <Star size={12} fill="currentColor" /> {shop.rating}
                </div>
              </div>
              <p className="text-secondary text-sm flex items-center gap-1 mb-4 flex-1">
                <MapPin size={14} /> {shop.area}
              </p>
              <div className="flex justify-between items-center text-sm pt-3 border-t border-gray-100">
                <span className="text-secondary">{shop.category}</span>
                <span className="font-semibold text-green-600">{shop.deliveryTime}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
      
      {filteredShops.length === 0 && (
        <div className="text-center py-12">
          <h3 className="text-secondary mb-2">No shops found</h3>
          <p>Try adjusting your search or filters.</p>
        </div>
      )}
    </div>
  );
};

export default ShopDiscovery;
