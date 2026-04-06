import React from 'react';
import { Link } from 'react-router-dom';
import { SHOPS, POPULAR } from '../data/mockData';

const Home = () => {
  // We keep the visual category icons for the UI slider
  const categories = [
    { name: 'Grocery', icon: '🛒', color: 'bg-teal-500' },
    { name: 'Pharmacy', icon: '💊', color: 'bg-pink-500' },
    { name: 'Electronics', icon: '📱', color: 'bg-blue-500' },
    { name: 'Snacks', icon: '🍪', color: 'bg-orange-500' },
    { name: 'Produce', icon: '🥬', color: 'bg-green-600' },
    { name: 'Pets', icon: '🐶', color: 'bg-amber-600' },
    { name: 'Stationery', icon: '📓', color: 'bg-purple-500' },
    { name: 'Home', icon: '🏠', color: 'bg-cyan-500' },
  ];

  // We slice the first 6 stores so the homepage doesn't scroll infinitely
  const nearbyStores = SHOPS.slice(0, 6);

  return (
    <div className="min-h-screen bg-[#FAFAFA] font-sans pb-24 relative overflow-hidden">
      
      {/* SOFT BACKGROUND BLUR GLOBES */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-green-200/40 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute top-[10%] right-[-10%] w-[50%] h-[50%] bg-orange-100/50 rounded-full blur-[120px] pointer-events-none"></div>

      {/* HEADER NAV */}
      <header className="flex justify-between items-center p-6 max-w-7xl mx-auto relative z-10">
        <div className="flex-1"></div>
        <div className="flex-1 flex justify-center">
          <div className="bg-white px-4 py-2 rounded-full shadow-sm flex items-center gap-2 text-sm font-medium border border-gray-100 cursor-pointer hover:shadow-md transition-all">
            <span className="text-green-600">📍</span>
            <span className="text-gray-700">Siliguri, West Bengal</span>
            <span className="text-gray-400 text-xs ml-1">Change</span>
          </div>
        </div>
        <div className="flex-1 flex justify-end">
          <Link to="/cart" className="bg-white px-4 py-2 rounded-xl shadow-sm border border-gray-100 flex items-center gap-2 font-bold cursor-pointer hover:shadow-md transition-all">
            <span className="relative">
              👛
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </span>
            <span>View Cart</span>
          </Link>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* HERO SECTION */}
        <div className="text-center mt-8 mb-12">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4">
            <span className="bg-gradient-to-r from-green-600 via-yellow-500 to-orange-500 text-transparent bg-clip-text">
              What do you need <br /> today?
            </span>
          </h1>
          <p className="text-gray-500 text-sm md:text-base max-w-lg mx-auto mb-10">
            Groceries, medicines, electronics — delivered in minutes from stores near you
          </p>

          {/* SEARCH BAR */}
          <div className="max-w-2xl mx-auto relative bg-white p-2 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100 flex items-center">
            <span className="text-gray-400 pl-4 text-lg">🔍</span>
            <input 
              type="text" 
              placeholder="Search for products, stores, or categories..."
              className="flex-1 outline-none px-4 py-3 text-gray-700 bg-transparent"
            />
            <button className="bg-green-600 text-white px-8 py-3 rounded-full font-bold hover:bg-green-700 transition-colors">
              Search
            </button>
          </div>

          {/* STATS */}
          <div className="flex justify-center gap-12 mt-12">
            <div>
              <p className="text-2xl font-black text-green-600">100</p>
              <p className="text-xs text-gray-500 font-medium">Local Stores</p>
            </div>
            <div>
              <p className="text-2xl font-black text-green-600">15 min</p>
              <p className="text-xs text-gray-500 font-medium">Avg. Delivery</p>
            </div>
            <div>
              <p className="text-2xl font-black text-green-600">10K+</p>
              <p className="text-xs text-gray-500 font-medium">Products</p>
            </div>
          </div>
        </div>

        {/* CATEGORIES */}
        <div className="mt-20">
          <p className="text-center text-xs font-bold tracking-widest text-gray-400 uppercase mb-8">Browse Categories</p>
          <div className="flex gap-6 overflow-x-auto pb-4 no-scrollbar justify-start md:justify-center">
            {categories.map((cat, i) => (
              <div key={i} className="flex flex-col items-center min-w-[72px] cursor-pointer group">
                <div className={`${cat.color} w-16 h-16 rounded-2xl flex items-center justify-center text-2xl shadow-sm group-hover:-translate-y-1 transition-transform`}>
                  {cat.icon}
                </div>
                <span className="text-xs font-semibold text-gray-700 mt-3">{cat.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* NEARBY STORES (CONNECTED TO DATABASE) */}
        <div className="mt-20">
          <div className="flex justify-between items-end mb-6">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Nearby Stores</h2>
              <p className="text-gray-500 text-sm mt-1">Delivering to you in minutes</p>
            </div>
            <span className="text-green-600 font-bold text-sm cursor-pointer hover:underline">View all 100 stores &gt;</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {nearbyStores.map(store => (
              <Link to={`/shop/${store.id}`} key={store.id}>
                <div className="bg-white rounded-3xl p-3 border border-gray-100 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-lg transition-all group cursor-pointer h-full flex flex-col">
                  <div className="relative h-40 rounded-2xl overflow-hidden mb-4">
                    <img src={store.img} alt={store.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    
                    {store.tag && (
                      <span className="absolute top-3 left-3 bg-red-500 text-white text-[10px] font-bold px-2 py-1 rounded-md">
                        ⚡ {store.tag}
                      </span>
                    )}
                    <span className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-gray-800 text-[11px] font-bold px-2 py-1 rounded-md flex items-center gap-1">
                      ⏱ {store.time}
                    </span>
                  </div>
                  <div className="px-2 pb-2 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start mb-1">
                        <h3 className="text-lg font-bold text-gray-900 leading-tight">{store.name}</h3>
                        <span className="bg-green-50 text-green-700 text-xs font-bold px-1.5 py-0.5 rounded flex items-center gap-1 shrink-0 ml-2">
                          ★ {store.rating}
                        </span>
                      </div>
                      <p className="text-gray-400 text-sm">{store.type}</p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* PROMO BANNER */}
        <div className="mt-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-3xl p-8 md:p-10 text-white shadow-lg flex flex-col md:flex-row justify-between items-center relative overflow-hidden">
          <div className="relative z-10 w-full md:w-auto text-left mb-6 md:mb-0">
            <span className="inline-block border border-white/30 bg-white/10 backdrop-blur-sm text-xs font-bold px-3 py-1 rounded-full mb-4">
              🚀 Limited Time Offer
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-2">Get 50% off your first delivery</h2>
            <p className="text-white/80 text-sm">Free delivery on orders above ₹199. No minimum order value.</p>
          </div>
          <div className="relative z-10 flex flex-col items-center md:items-end w-full md:w-auto">
            <p className="text-xs font-medium text-white/80 mb-2">Use code</p>
            <div className="border border-dashed border-white/50 bg-white/10 px-6 py-3 rounded-xl font-bold tracking-widest text-lg cursor-pointer hover:bg-white/20 transition-colors">
              WELCOME50 📋
            </div>
            <p className="text-[10px] text-white/60 mt-2">Click to copy</p>
          </div>
        </div>

        {/* POPULAR RIGHT NOW (CONNECTED TO DATABASE) */}
        <div className="mt-16">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-600">📈</div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 leading-none">Popular Right Now</h2>
              <p className="text-gray-500 text-sm mt-1">Curated picks from your area</p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {POPULAR.map(item => (
              <div key={item.id} className="bg-white rounded-3xl p-2 border border-gray-100 shadow-[0_4px_20px_rgb(0,0,0,0.03)] relative group hover:shadow-lg transition-all">
                <div className="relative aspect-square rounded-2xl overflow-hidden mb-3">
                  <img src={item.img} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <span className={`absolute top-2 left-2 text-[10px] font-bold px-2 py-1 rounded-md text-white ${item.tag === 'Bestseller' ? 'bg-orange-500' : item.tag === 'Trending' ? 'bg-red-500' : 'bg-blue-500'}`}>
                    {item.tag === 'Trending' ? '🔥' : item.tag === 'New' ? '✨' : '⭐'} {item.tag}
                  </span>
                  
                  {/* Floating Add Button inside image area */}
                  <button className="absolute bottom-2 right-2 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-lg hover:bg-green-700 shadow-md transform hover:scale-110 transition-all">
                    +
                  </button>
                </div>
                <div className="px-2 pb-3">
                  <h3 className="font-bold text-gray-800 text-sm line-clamp-1">{item.name}</h3>
                  <p className="text-gray-400 text-xs mt-0.5">{item.size}</p>
                  <p className="text-green-600 font-extrabold mt-2">₹{item.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </main>
    </div>
  );
};

export default Home;