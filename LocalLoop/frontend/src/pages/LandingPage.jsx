import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Search, MapPin, Star, TrendingUp, ShieldCheck, HeartHandshake, Truck } from 'lucide-react';
import { shops, categories, products } from '../data/mockData';

const LandingPage = () => {
  const typeTarget = useRef(null);

  useEffect(() => {
    // Check if Typed is loaded globally from index.html CDN
    if (window.Typed && typeTarget.current) {
      const typed = new window.Typed(typeTarget.current, {
        strings: ["Sathi", "Grocery", "Food", "Fashion", "Electronics", "Handicrafts", "Beverages"],
        typeSpeed: 100,
        backSpeed: 150,
        loop: true
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
      <section className="hero">
        <div className="container">
          <div className="badge badge-accent mb-4">📍 Inspiria Knowledge Campus, Uttorayon Twp,Gaurcharan </div>

          <div className="typed mb-4">
            <h1>
              Shop <span ref={typeTarget} className="text-primary" />
            </h1>
          </div>

          <p className="text-secondary mb-8 text-lg max-w-2xl mx-auto">
            Discover and shop from your favorite local stores in Sevoke Road, Bidhan Market, and across Siliguri. Support your community.
          </p>

          <div className="search-bar">
            <input type="text" className="search-input" placeholder="Search for groceries, momos, electronics in Siliguri..." />
            <button className="search-btn">
              <Search size={20} />
            </button>
          </div>

          <div className="flex justify-center gap-4 mt-8">
            <Link to="/shops" className="btn btn-primary">Explore Shops</Link>
            <Link to="/dashboard" className="btn btn-outline">Register Shop</Link>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="section bg-secondary">
        <div className="container">
          <h2 className="section-title">Shop by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((cat, idx) => (
              <div key={idx} className="card text-center p-6" style={{ cursor: 'pointer' }}>
                <div className="mx-auto mb-4 w-12 h-12 flex items-center justify-center rounded-full" style={{ backgroundColor: `${cat.color}20`, color: cat.color }}>
                  <span style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>{cat.name[0]}</span>
                </div>
                <h3 className="text-sm font-semibold">{cat.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Shops */}
      <section className="section">
        <div className="container">
          <div className="flex justify-between items-center mb-8">
            <h2 className="m-0">Featured Local Shops</h2>
            <Link to="/shops" className="text-primary font-semibold">View All ➔</Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {shops.slice(0, 3).map(shop => (
              <Link to={`/shops`} key={shop.id} className="card">
                <div className="card-img-wrapper">
                  <img src={shop.image} alt={shop.name} className="card-img" />
                  {shop.verified && (
                    <div className="absolute top-2 right-2 bg-white text-green-600 p-1 rounded-full shadow-md">
                      <ShieldCheck size={18} />
                    </div>
                  )}
                </div>
                <div className="card-content">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg">{shop.name}</h3>
                    <div className="flex items-center gap-1 text-sm font-bold text-yellow-500">
                      <Star size={14} fill="currentColor" /> {shop.rating}
                    </div>
                  </div>
                  <p className="text-secondary text-sm flex items-center gap-1 mb-3">
                    <MapPin size={14} /> {shop.area}
                  </p>
                  <div className="flex justify-between items-center text-sm">
                    <span className="badge bg-secondary">{shop.category}</span>
                    <span className="text-primary font-medium">{shop.deliveryTime}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section bg-secondary">
        <div className="container text-center">
          <h2 className="section-title">Why Choose Shop Sathi?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6">
              <div className="w-16 h-16 mx-auto bg-orange-100 text-orange-500 rounded-full flex items-center justify-center mb-4">
                <HeartHandshake size={32} />
              </div>
              <h3 className="mb-2">Support Local</h3>
              <p className="text-secondary">Your money stays in Siliguri, helping local families and businesses grow.</p>
            </div>
            <div className="p-6">
              <div className="w-16 h-16 mx-auto bg-green-100 text-green-500 rounded-full flex items-center justify-center mb-4">
                <Truck size={32} />
              </div>
              <h3 className="mb-2">Superfast Delivery</h3>
              <p className="text-secondary">Get products delivered from neighborhood stores in minutes, not days.</p>
            </div>
            <div className="p-6">
              <div className="w-16 h-16 mx-auto bg-blue-100 text-blue-500 rounded-full flex items-center justify-center mb-4">
                <ShieldCheck size={32} />
              </div>
              <h3 className="mb-2">Verified Sellers</h3>
              <p className="text-secondary">Shop with confidence from trusted and verified local merchants.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Promotional Banner */}
      <section className="section container">
        <div className="rounded-2xl overflow-hidden relative p-12 flex items-center bg-gradient-1 text-white">
          <div className="relative z-10 max-w-lg">
            <h2 className="text-white text-3xl mb-4">Siliguri's Biggest Digital Mela!</h2>
            <p className="mb-6 opacity-90 text-lg">Get up to 50% off from participating stores in Bidhan Market.</p>
            <button className="btn bg-white text-orange-500">Shop Now</button>
          </div>
          <div className="absolute right-0 top-0 h-full w-1/2 bg-black opacity-10" style={{ clipPath: 'polygon(20% 0, 100% 0, 100% 100%, 0 100%)' }}></div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
