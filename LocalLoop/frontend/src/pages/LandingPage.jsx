import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Search, MapPin, Heart, Plus, Store, ShoppingCart, Shirt, Monitor, Utensils, Brush, ArrowRight } from 'lucide-react';
import { trendingProducts, featuredShops } from '../data/mockData';
import './LandingPage.css';

const LandingPage = () => {
  const typeTarget = useRef(null);

  useEffect(() => {
    // Check if Typed is loaded globally from index.html CDN
    if (window.Typed && typeTarget.current) {
      const typed = new window.Typed(typeTarget.current, {
        strings: ["Local Businesses", "Neighborhood Stores", "Siliguri Markets", "Community Shops"],
        typeSpeed: 60,
        backSpeed: 40,
        loop: true,
        backDelay: 2000
      });

      // Cleanup on unmount
      return () => {
        typed.destroy();
      };
    }
  }, []);

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="landing-hero">
        <div className="container">
          <div className="live-badge">
            <span className="live-dot"></span> Live in Siliguri
          </div>

          <div className="mb-6">
            <h1 className="hero-title-main">Digitally Empowering</h1>
            <h1 className="hero-title-sub">
              <span ref={typeTarget} />
            </h1>
          </div>

          <p className="hero-subtitle">
            Discover, shop, and support the heartbeat of your neighborhood. Bringing the warmth of local commerce directly to your fingertips.
          </p>

          <div className="hero-search-container">
            <Search size={20} color="#94a3b8" style={{ marginLeft: '0.5rem' }} />
            <input type="text" className="hero-search-input" placeholder="What are you looking for today?" />
            <div className="hero-location">
              <MapPin size={14} />
              Pradhan Nagar
            </div>
            <button className="hero-search-btn">Search</button>
          </div>

          <div className="hero-categories">
            <div className="category-item">
              <div className="category-icon">
                <ShoppingCart size={24} />
              </div>
              <span className="category-label">Grocery</span>
            </div>
            <div className="category-item">
              <div className="category-icon">
                <Shirt size={24} />
              </div>
              <span className="category-label">Fashion</span>
            </div>
            <div className="category-item">
              <div className="category-icon">
                <Monitor size={24} />
              </div>
              <span className="category-label">Electronics</span>
            </div>
            <div className="category-item">
              <div className="category-icon">
                <Utensils size={24} />
              </div>
              <span className="category-label">Food</span>
            </div>
            <div className="category-item">
              <div className="category-icon">
                <Brush size={24} />
              </div>
              <span className="category-label">Handicrafts</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Shops */}
      <section className="landing-section">
        <div className="section-header">
          <div>
            <h2 className="section-title">Featured Shops</h2>
            <p className="section-subtitle">Discover highly rated businesses in your area.</p>
          </div>
          <Link to="/shops" className="view-all-link">View all shops</Link>
        </div>

        <div className="featured-grid">
          {/* Main Card */}
          {featuredShops[0] && (
            <Link to={`/product/${featuredShops[0].id}`} className="featured-main-card block">
              <img src={featuredShops[0].image} alt={featuredShops[0].label} className="featured-img" />
              <div className="verified-badge">
                <span style={{ color: '#F59E0B' }}>✔</span> Verified Local
              </div>
              <div className="featured-main-overlay">
                <p style={{ fontSize: '0.75rem', marginBottom: '0.25rem', opacity: 0.9 }}>{featuredShops[0].area}</p>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.25rem' }}>{featuredShops[0].label}</h3>
                <p style={{ fontSize: '0.875rem', opacity: 0.9 }}>{featuredShops[0].tagline}</p>
              </div>
            </Link>
          )}

          {/* Right Column */}
          <div className="right-column">
            {featuredShops[1] && (
              <Link to={`/product/${featuredShops[1].id}`} className="featured-sub-card block">
                <img src={featuredShops[1].image} alt={featuredShops[1].label} className="featured-img" />
                <div className="featured-sub-overlay">
                  <p style={{ fontSize: '0.7rem', marginBottom: '0.1rem', opacity: 0.9 }}>{featuredShops[1].area}</p>
                  <h3 style={{ fontSize: '1.125rem', fontWeight: 'bold' }}>{featuredShops[1].label}</h3>
                </div>
              </Link>
            )}

            <Link to="/register" className="register-shop-card">
              <Store size={28} className="mb-3" />
              <h3 className="register-shop-title">Open your shop</h3>
              <p className="register-shop-subtitle">Join 500+ local sellers.</p>
              <span style={{ fontSize: '0.85rem', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                Register now <ArrowRight size={14} />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Support Local Siliguri Section */}
      <section className="support-section">
        <div className="support-content">
          <span className="support-badge">🤝 Community Initiative</span>
          <h2 className="support-title">Support Local Siliguri</h2>
          <p className="support-text">
            Every purchase keeps our community thriving. Enjoy 0% platform fees on your first 3 local orders.
          </p>
          <button className="claim-btn">Claim Offer</button>
        </div>
        <div className="support-image-container">
          <img
            src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=600&transparent=1"
            alt="Happy community members"
            className="support-image"
            style={{ borderRadius: '50%', objectFit: 'cover', height: '80%', bottom: '10%' }}
          />
        </div>
      </section>

      {/* Trending Products */}
      <section className="landing-section">
        <div className="section-header">
          <h2 className="section-title">Trending in your area</h2>
        </div>

        <div className="trending-grid">
          {trendingProducts.map(product => (
            <div className="product-card" key={product.id}>
              <div className="product-img-wrapper">
                <img src={product.image} alt={product.name} className="product-img" />
                <button className="wishlist-btn"><Heart size={16} /></button>
              </div>
              <div className="product-shop">{product.shopName}</div>
              <h3 className="product-name">{product.name}</h3>
              <div className="product-bottom">
                <div className="product-price">₹{product.price}</div>
                <button className="add-btn"><Plus size={16} /></button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
