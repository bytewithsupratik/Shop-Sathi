export const shops = [
  {
    id: 1,
    name: "HillCart Grocery",
    category: "Grocery",
    rating: 4.8,
    reviews: 124,
    area: "Hill Cart Road",
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=800",
    deliveryTime: "15-20 mins",
    verified: true
  },
  {
    id: 2,
    name: "Darjeeling Tea Corner",
    category: "Beverages",
    rating: 4.9,
    reviews: 312,
    area: "Pradhan Nagar",
    image: "https://images.unsplash.com/photo-1576092762791-dd9e2220abd1?auto=format&fit=crop&q=80&w=800",
    deliveryTime: "25-30 mins",
    verified: true
  },
  {
    id: 3,
    name: "North Bengal Electronics",
    category: "Electronics",
    rating: 4.5,
    reviews: 89,
    area: "Sevoke Road",
    image: "https://images.unsplash.com/photo-1526406915894-7bcd65f60845?auto=format&fit=crop&q=80&w=800",
    deliveryTime: "45-60 mins",
    verified: false
  },
  {
    id: 4,
    name: "Bidhan Market Fashion Hub",
    category: "Fashion",
    rating: 4.6,
    reviews: 156,
    area: "Bidhan Market",
    image: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&q=80&w=800",
    deliveryTime: "1-2 days",
    verified: true
  },
  {
    id: 5,
    name: "Momo Street Siliguri",
    category: "Food",
    rating: 4.7,
    reviews: 420,
    area: "Hakim Para",
    image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&q=80&w=800",
    deliveryTime: "30-40 mins",
    verified: true
  },
  {
    id: 6,
    name: "Himalayan Handicrafts",
    category: "Art & Decor",
    rating: 4.9,
    reviews: 67,
    area: "City Center",
    image: "https://images.unsplash.com/photo-1584589167171-541ce45f1eea?auto=format&fit=crop&q=80&w=800",
    deliveryTime: "2-3 days",
    verified: true
  }
];

export const products = [
  {
    id: 101,
    shopId: 1,
    name: "Organic Darjeeling Apples (1kg)",
    price: 180,
    image: "https://images.unsplash.com/photo-1560806887-1e4cd0b6fac6?auto=format&fit=crop&q=80&w=800",
    rating: 4.5,
    inStock: true
  },
  {
    id: 102,
    shopId: 2,
    name: "First Flush Premium Darjeeling Tea",
    price: 850,
    image: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&q=80&w=800",
    rating: 4.9,
    inStock: true
  },
  {
    id: 103,
    shopId: 5,
    name: "Chicken Steamed Momos (10pcs)",
    price: 120,
    image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&q=80&w=800",
    rating: 4.8,
    inStock: true
  },
  {
    id: 104,
    shopId: 6,
    name: "Handwoven Bamboo Basket",
    price: 450,
    image: "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?auto=format&fit=crop&q=80&w=800",
    rating: 4.7,
    inStock: true
  }
];

export const categories = [
  { name: "Grocery", icon: "ShoppingCart", color: "#f97316" },
  { name: "Food", icon: "Utensils", color: "#ef4444" },
  { name: "Fashion", icon: "Shirt", color: "#8b5cf6" },
  { name: "Electronics", icon: "Laptop", color: "#3b82f6" },
  { name: "Handicrafts", icon: "Palette", color: "#10b981" },
  { name: "Beverages", icon: "Coffee", color: "#d97706" }
];
