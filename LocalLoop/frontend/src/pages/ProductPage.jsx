import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, MapPin, Clock, Info, Share2, Search, Plus, Minus, Check, ShoppingBag, CheckCircle2 } from 'lucide-react';
import { products, shops } from '../data/mockData';
import { useCart } from '../context/CartContext';
import './ProductPage.css';

const ProductPage = () => {
  const { id } = useParams();
  const shop = shops.find(s => s.id === parseInt(id)) || shops[0];
  const shopProducts = products.filter(p => p.shopId === shop.id);

  const [searchQuery, setSearchQuery] = useState('');
  const [addedId, setAddedId] = useState(null);
  const { addToCart, cartItems, updateQuantity } = useCart();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleAddToCart = (product) => {
    addToCart({ ...product, shopName: shop.name });
    setAddedId(product.id);
    setTimeout(() => setAddedId(null), 1200);
  };

  // Filter products by search
  const filteredProducts = shopProducts.filter(p =>
    p.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Check if a product is in the cart
  const getCartQty = (productId) => {
    const item = cartItems.find(i => i.id === productId);
    return item ? item.quantity : 0;
  };

  // Compute discount percentage
  const getDiscount = (price, originalPrice) => {
    if (!originalPrice || originalPrice <= price) return null;
    return Math.round(((originalPrice - price) / originalPrice) * 100);
  };

  return (
    <div className="shop-detail-page animate-fade-in">
      <div className="container" style={{ paddingTop: '2rem' }}>

        {/* Banner */}
        <div className="shop-banner-wrapper">
          <img src={shop.image} alt={shop.name} className="shop-banner-img" />
        </div>

        {/* Profile Row */}
        <div className="shop-profile-row">
          <div className="shop-profile-left">
            <div style={{ position: 'relative' }}>
              <div className="shop-logo-box">
                <img src={shop.image} alt={shop.name} />
              </div>
              {shop.verified && (
                <div className="verified-tick">
                  <CheckCircle2 size={12} />
                </div>
              )}
            </div>
            <div className="shop-name-block">
              <h1>{shop.name}</h1>
              <div className="shop-meta-chips">
                <span className="meta-chip">
                  <Star size={14} fill="#f59e0b" /> {shop.rating} ({shop.reviews}+ Reviews)
                </span>
                <span className="meta-chip">
                  <MapPin size={14} style={{ color: '#64748b' }} /> Siliguri Merchant
                </span>
                <span className="meta-chip">
                  <Clock size={14} style={{ color: '#64748b' }} /> Fast Delivery ({shop.deliveryTime})
                </span>
              </div>
            </div>
          </div>

          <div className="shop-profile-actions">
            <button className="action-btn-outline">
              <Info size={18} /> Shop Info
            </button>
            <button className="action-btn-filled">
              <Share2 size={18} /> Share
            </button>
          </div>
        </div>

        {/* Description Bar */}
        <div className="shop-description-bar">
          {shop.description || `Welcome to ${shop.name}, serving the Siliguri community. Specializing in ${shop.category.toLowerCase()} products.`}
        </div>

        {/* Search + Filter Row */}
        <div className="shop-filter-row">
          <div className="shop-search-box">
            <Search size={18} />
            <input
              type="text"
              className="shop-search-input"
              placeholder={`Search in ${shop.name}...`}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="filter-pills">
            <button className="filter-pill active">All Products</button>
          </div>
        </div>

        {/* Product Grid */}
        <div className="shop-product-grid">
          {filteredProducts.length > 0 ? filteredProducts.map(product => {
            const discount = getDiscount(product.price, product.originalPrice);
            const cartQty = getCartQty(product.id);

            return (
              <div key={product.id} className="sp-card">
                <div className="sp-img-wrapper">
                  <img src={product.image} alt={product.name} />
                  {discount && (
                    <div className="sp-discount-badge">{discount}% OFF</div>
                  )}
                </div>
                <div className="sp-card-body">
                  <div className="sp-card-name">{product.name}</div>
                  <div className="sp-card-weight">{shop.category}</div>
                  <div className="sp-card-bottom">
                    <div className="sp-price-group">
                      <span className="sp-price">₹{product.price}</span>
                      {product.originalPrice && product.originalPrice > product.price && (
                        <span className="sp-original-price">₹{product.originalPrice}</span>
                      )}
                    </div>

                    {cartQty > 0 ? (
                      <div className="sp-qty-control">
                        <button className="sp-qty-btn" onClick={() => updateQuantity(product.id, -1)}>
                          <Minus size={14} />
                        </button>
                        <span className="sp-qty-value">{cartQty}</span>
                        <button className="sp-qty-btn" onClick={() => updateQuantity(product.id, 1)}>
                          <Plus size={14} />
                        </button>
                      </div>
                    ) : (
                      <button
                        className={`sp-add-btn ${addedId === product.id ? 'added' : ''}`}
                        onClick={() => handleAddToCart(product)}
                      >
                        {addedId === product.id ? <Check size={18} /> : <Plus size={18} />}
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          }) : (
            <div className="sp-empty">
              <ShoppingBag size={56} className="sp-empty-icon mx-auto" />
              <h3>No products found</h3>
              <p>Try adjusting your search query.</p>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default ProductPage;
