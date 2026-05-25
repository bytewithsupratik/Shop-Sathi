import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export const CartProvider = ({ children }) => {
  // Initialize from localStorage
  const [cartItems, setCartItems] = useState(() => {
    try {
      const saved = localStorage.getItem('shopSathiCart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Persist to localStorage whenever cart changes
  useEffect(() => {
    localStorage.setItem('shopSathiCart', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        // Increase quantity if already in cart
        return prev.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      // Add new item with quantity 1
      return [...prev, {
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        shopId: product.shopId,
        shopName: product.shopName || null,
        quantity: 1
      }];
    });
  };

  const removeFromCart = (productId) => {
    setCartItems(prev => prev.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId, delta) => {
    setCartItems(prev =>
      prev.map(item => {
        if (item.id === productId) {
          const newQty = item.quantity + delta;
          if (newQty <= 0) return null; // will be filtered
          return { ...item, quantity: newQty };
        }
        return item;
      }).filter(Boolean)
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const getCartCount = () => {
    return cartItems.reduce((acc, item) => acc + item.quantity, 0);
  };

  const value = {
    cartItems,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getCartCount
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};
