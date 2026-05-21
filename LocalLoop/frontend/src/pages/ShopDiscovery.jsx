import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Star, CheckCircle2, Clock } from 'lucide-react';
import { shops, categories } from '../data/mockData';
import './ShopDiscovery.css';

const ShopDiscovery = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredShops = shops.filter(shop => {
    return activeCategory === 'All' || shop.category === activeCategory;
  });

  return (
    <div className="discovery-page animate-fade-in">
      <div className="container">
        
        {/* Header Section */}
        <div className="discovery-header">
          <h1 className="discovery-title">Discover Siliguri</h1>
          <p className="discovery-subtitle">Find the best local shops, fresh groceries, and unique finds near you.</p>
        </div>

        {/* Filters Section */}
        <div className="filters-container">
          <button className="location-dropdown">
            All Locations <ChevronDown size={18} />
          </button>
          
          <button 
            className={`category-pill ${activeCategory === 'All' ? 'active' : ''}`}
            onClick={() => setActiveCategory('All')}
          >
            All
          </button>
          
          {categories.map(cat => (
            <button 
              key={cat.name}
              className={`category-pill ${activeCategory === cat.name ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat.name)}
            >
              {cat.name}
            </button>
          ))}
          <button className="category-pill" onClick={() => setActiveCategory('Pharmacy')}>
            Pharmacy
          </button>
        </div>

        {/* Shops Grid */}
        <div className="shop-grid">
          {filteredShops.map(shop => (
            <Link to={`/product/${shop.id}`} key={shop.id} className="shop-card-new">
              
              {/* Image & Badges */}
              <div className="shop-image-wrapper">
                <img src={shop.image} alt={shop.name} className="shop-image" />
                
                {shop.verified && (
                  <div className="verified-badge">
                    <CheckCircle2 size={14} /> Verified Local
                  </div>
                )}
                
                <div className="rating-badge">
                  <Star size={14} className="text-yellow-400" fill="currentColor" /> {shop.rating}
                </div>
              </div>
              
              {/* Card Content */}
              <div className="shop-info">
                <h3 className="shop-title line-clamp-1">{shop.name}</h3>
                <p className="shop-subtitle line-clamp-1">
                  {shop.category} • {shop.area}
                </p>
                
                <div className="delivery-pill">
                  <Clock size={14} /> Delivery: {shop.deliveryTime}
                </div>
              </div>

            </Link>
          ))}
        </div>

        {filteredShops.length === 0 && (
          <div className="text-center py-16">
            <h3 className="text-xl font-bold text-slate-800 mb-2">No shops found</h3>
            <p className="text-slate-500">We couldn't find any shops in the '{activeCategory}' category right now.</p>
          </div>
        )}

      </div>
    </div>
  );
};

export default ShopDiscovery;
