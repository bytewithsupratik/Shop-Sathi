import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = ({ cart, user }) => {
  const location = useLocation();

  // Hide HUD on login screens
  if (location.pathname === '/login' || location.pathname === '/success') {
    return null;
  }

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#050505]/90 backdrop-blur-md border-b border-cyan-900/50 uppercase font-mono tracking-widest text-cyan-500 select-none">
      
      {/* TOP DECORATIVE TECH LINE */}
      <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-70"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex justify-between items-center relative">

        {/* BACKGROUND HUD DOTS (Subtle texture) */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoNiwgMTgyLCAyMTIsIDAuMSkiLz48L3N2Zz4=')] opacity-30 pointer-events-none"></div>

        {/* 1. LEFT: MISSION CONTROL (Brand) */}
        <Link to="/" className="flex items-center gap-4 group relative z-10">
          {/* Angled Logo Box */}
          <div className="w-10 h-10 bg-cyan-950/80 border border-cyan-500 flex items-center justify-center [clip-path:polygon(20%_0%,100%_0%,80%_100%,0%_100%)] group-hover:bg-cyan-400 group-hover:text-black transition-all shadow-[0_0_15px_rgba(6,182,212,0.3)] group-hover:shadow-[0_0_20px_rgba(6,182,212,0.8)]">
            <span className="text-xl font-black -skew-x-12">LD</span>
          </div>
          <div className="flex flex-col">
            <span className="text-[8px] text-cyan-700 leading-none mb-1 animate-pulse">System.Core_Online</span>
            <span className="text-lg font-black tracking-tighter text-white group-hover:text-cyan-400 transition-colors">
              Local<span className="text-cyan-500">Dash</span>
            </span>
          </div>
        </Link>

        {/* 2. CENTER: ACTIVE SECTOR (Location) */}
        <div className="hidden md:flex items-center gap-4 relative z-10">
          <div className="flex flex-col text-right">
            <span className="text-[8px] text-yellow-500 tracking-[0.2em]">Active Sector</span>
            <span className="text-xs text-white tracking-wider">Zone 05 // Siliguri</span>
          </div>
          
          {/* HUD Target/Health Bar Visual */}
          <div className="w-32 h-3 bg-black border border-cyan-900 rounded-sm overflow-hidden flex relative">
             <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNCIgaGVpZ2h0PSI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjQiIGZpbGw9InJnYmEoMCwwLDAsMC41KSIvPjwvc3ZnPg==')] z-10 opacity-50"></div>
             <div className="h-full bg-cyan-500 w-[85%] shadow-[0_0_10px_#06b6d4]"></div>
          </div>
        </div>

        {/* 3. RIGHT: PLAYER & INVENTORY (Cart) */}
        <div className="flex items-center gap-6 relative z-10">
          
          {/* Player ID */}
          <div className="hidden sm:flex flex-col text-right">
            <span className="text-[8px] text-cyan-700 tracking-[0.2em]">Player_ID</span>
            <span className="text-xs font-bold text-white">{user || 'Guest_001'}</span>
          </div>

          {/* Angled Inventory Button */}
          <Link to="/cart" className="group relative flex items-center gap-3 bg-[#0a192f] hover:bg-cyan-900/80 border border-cyan-500/50 hover:border-cyan-300 px-5 py-2 [clip-path:polygon(10%_0%,100%_0%,90%_100%,0%_100%)] transition-all cursor-pointer active:scale-95">
            
            {/* Glowing Corner Accents */}
            <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-cyan-400 opacity-50 group-hover:opacity-100"></div>
            <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-cyan-400 opacity-50 group-hover:opacity-100"></div>

            {/* Futuristic Box Icon */}
            <div className="text-cyan-500 group-hover:text-cyan-300 group-hover:drop-shadow-[0_0_5px_#67e8f9]">
              <svg className="w-5 h-5 -skew-x-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path>
              </svg>
            </div>
            
            <div className="flex flex-col text-left -skew-x-12">
              <span className="text-[8px] text-cyan-500 group-hover:text-cyan-300">Inventory</span>
              <span className="text-xs text-white font-bold">
                {totalItems} <span className="text-cyan-700 mx-1">|</span> {totalItems > 0 ? `₹${totalPrice}` : 'Empty'}
              </span>
            </div>

            {/* Notification Alert */}
            {totalItems > 0 && (
              <span className="absolute top-1 right-2 w-1.5 h-1.5 bg-yellow-400 rounded-full animate-ping"></span>
            )}
          </Link>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;