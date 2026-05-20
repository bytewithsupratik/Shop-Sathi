import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Search, MapPin, Heart, Plus, Store, ShoppingCart, Shirt, Monitor, Utensils, Brush, ArrowRight } from 'lucide-react';
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
          <Link to="/shops" className="featured-main-card block">
            <img
              src="https://img.etimg.com/thumb/width-1200,height-1200,imgsize-3317972,resizemode-75,msid-107438198/industry/cons-products/fmcg/quick-commerce-platforms-surge-rocks-neighborhood-grocery-stores.jpg"
              alt="Grocery Store"
              className="featured-img"
            />
            <div className="verified-badge">
              <span style={{ color: '#F59E0B' }}>✔</span> Verified Local
            </div>
            <div className="featured-main-overlay">
              <p style={{ fontSize: '0.75rem', marginBottom: '0.25rem', opacity: 0.9 }}>Pradhan Nagar</p>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.25rem' }}>HillCart Grocery</h3>
              <p style={{ fontSize: '0.875rem', opacity: 0.9 }}>⭐ 4.9 (120 reviews) • Groceries</p>
            </div>
          </Link>

          {/* Right Column */}
          <div className="right-column">
            <Link to="/shops" className="featured-sub-card block">
              <img
                src="https://content.jdmagicbox.com/v2/comp/darjeeling/n4/9999px354.x354.230625100348.p6n4/catalogue/the-tea-shoppe-nehru-road-darjeeling-tea-stalls-8v36d0ry70.jpg"
                alt="Tea Corner"
                className="featured-img"
              />
              <div className="featured-sub-overlay">
                <p style={{ fontSize: '0.7rem', marginBottom: '0.1rem', opacity: 0.9 }}>City Center</p>
                <h3 style={{ fontSize: '1.125rem', fontWeight: 'bold' }}>The Tea Shoppe</h3>
              </div>
            </Link>

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
          {/* Product 1 */}
          <div className="product-card">
            <div className="product-img-wrapper">
              <img src="https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?auto=format&fit=crop&w=400&q=80" alt="Tea" className="product-img" />
              <button className="wishlist-btn"><Heart size={16} /></button>
            </div>
            <div className="product-shop">Darjeeling Tea Corner</div>
            <h3 className="product-name">Premium First Flush Tea</h3>
            <div className="product-bottom">
              <div className="product-price">₹850</div>
              <button className="add-btn"><Plus size={16} /></button>
            </div>
          </div>

          {/* Product 2 */}
          <div className="product-card">
            <div className="product-img-wrapper">
              <img src="https://i0.wp.com/iimun.in/blog/wp-content/uploads/2025/10/Quels_sont_les_condiments_essentiels_avoir_dans_votre_garde-manger.jpg?fit=1080%2C650&ssl=1" alt="Spices" className="product-img" />
              <button className="wishlist-btn"><Heart size={16} /></button>
            </div>
            <div className="product-shop">HillCart Grocery</div>
            <h3 className="product-name">Organic Turmeric & Cumin</h3>
            <div className="product-bottom">
              <div className="product-price">₹240</div>
              <button className="add-btn"><Plus size={16} /></button>
            </div>
          </div>

          {/* Product 3 */}
          <div className="product-card">
            <div className="product-img-wrapper">
              <img src="https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&w=400&q=80" alt="Bowl" className="product-img" />
              <button className="wishlist-btn"><Heart size={16} /></button>
            </div>
            <div className="product-shop">Siliguri Arts</div>
            <h3 className="product-name">Handcrafted Clay Bowl</h3>
            <div className="product-bottom">
              <div className="product-price">₹450</div>
              <button className="add-btn"><Plus size={16} /></button>
            </div>
          </div>

          {/* Product 4 */}
          <div className="product-card">
            <div className="product-img-wrapper">
              <img src="https://images.unsplash.com/photo-1518843875459-f738682238a6?auto=format&fit=crop&w=400&q=80" alt="Greens" className="product-img" />
              <button className="wishlist-btn"><Heart size={16} /></button>
            </div>
            <div className="product-shop">Green Valley Farm</div>
            <h3 className="product-name">Farm Fresh Greens Bundle</h3>
            <div className="product-bottom">
              <div className="product-price">₹120</div>
              <button className="add-btn"><Plus size={16} /></button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
