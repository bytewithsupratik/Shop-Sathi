import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// --- COMPONENTS & PAGES ---
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Success from './pages/Success';

function App() {
  // --- GLOBAL STATE ---
  // If you want to bypass the login screen while building, change null to "Sankar"
  const [user, setUser] = useState(null); 
  const [cart, setCart] = useState([]);   

  // --- CART LOGIC ---
  const addToCart = (product) => {
    setCart((prevCart) => {
      // Check if item is already in the cart
      const exists = prevCart.find(item => item.id === product.id);
      if (exists) {
        // If it exists, just increase the quantity
        return prevCart.map(item => 
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      // If it's new, add it to the cart with a quantity of 1
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const updateQuantity = (id, delta) => {
    setCart((prevCart) => 
      prevCart.map(item => 
        item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
      )
    );
  };

  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter(item => item.id !== id));
  };

  const clearCart = () => setCart([]);

  return (
    <Router>
      <div className="min-h-screen bg-[#FAFAFA] text-gray-900 font-sans selection:bg-green-200">
        
        {/* THE GLOBAL NAVBAR */}
        {/* We pass the cart and user state so the Navbar can display the item count and user name */}
        <Navbar cart={cart} user={user} />
        
        {/* THE PAGE ROUTER */}
        {/* We add pt-20 (padding-top) so the pages don't slide underneath our fixed Navbar */}
        <div className="pt-20"> 
          <Routes>
            {/* PUBLIC ROUTE */}
            <Route path="/login" element={!user ? <Login setUser={setUser} /> : <Navigate to="/" />} />
            
            {/* PROTECTED ROUTES (Must be logged in to view) */}
            <Route path="/" element={user ? <Home /> : <Navigate to="/login" />} />
            
            <Route path="/shop/:id" element={user ? <Shop addToCart={addToCart} /> : <Navigate to="/login" />} />
            
            <Route path="/cart" element={user ? (
              <Cart 
                cart={cart} 
                updateQuantity={updateQuantity} 
                removeFromCart={removeFromCart} 
              />
            ) : <Navigate to="/login" />} />
            
            <Route path="/checkout" element={user ? (
              <Checkout cart={cart} clearCart={clearCart} />
            ) : <Navigate to="/login" />} />
            
            <Route path="/success" element={user ? <Success /> : <Navigate to="/login" />} />
          </Routes>
        </div>

      </div>
    </Router>
  );
}

export default App;