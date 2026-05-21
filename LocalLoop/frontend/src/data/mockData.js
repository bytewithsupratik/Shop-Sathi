// ==========================================
// SHOPS — 12 shops across Siliguri
// ==========================================
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
    verified: true,
    description: "Your one-stop destination for fresh vegetables, fruits, dairy, and daily essentials. We source directly from local farms around Siliguri to ensure maximum freshness."
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
    verified: true,
    description: "Premium teas sourced straight from the Darjeeling hills. From first flush to masala chai blends, we bring the authentic taste of the mountains to your cup."
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
    verified: false,
    description: "Laptops, smartphones, earbuds, and accessories at competitive prices. Authorized dealer for Samsung, Xiaomi, and boAt products."
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
    verified: true,
    description: "Traditional and modern fashion under one roof. Specializing in ethnic wear, sarees, kurtas, and trendy western outfits for all occasions."
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
    verified: true,
    description: "Authentic Tibetan momos, thukpa, and chowmein made with love. Our recipes have been passed down through three generations of Himalayan cooks."
  },
  {
    id: 6,
    name: "Himalayan Handicrafts",
    category: "Handicrafts",
    rating: 4.9,
    reviews: 67,
    area: "City Center",
    image: "https://images.unsplash.com/photo-1584589167171-541ce45f1eea?auto=format&fit=crop&q=80&w=800",
    deliveryTime: "2-3 days",
    verified: true,
    description: "Handwoven bamboo baskets, clay pottery, and traditional Nepali art. Every piece is crafted by local artisans from the foothills."
  },
  {
    id: 7,
    name: "Siliguri MedPlus Pharmacy",
    category: "Pharmacy",
    rating: 4.4,
    reviews: 203,
    area: "Pradhan Nagar",
    image: "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?auto=format&fit=crop&q=80&w=800",
    deliveryTime: "20-30 mins",
    verified: true,
    description: "Licensed pharmacy delivering prescription medicines, OTC drugs, health supplements, and personal care products right to your doorstep."
  },
  {
    id: 8,
    name: "Golden Crust Bakery",
    category: "Bakery",
    rating: 4.8,
    reviews: 187,
    area: "Sevoke Road",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=800",
    deliveryTime: "25-35 mins",
    verified: true,
    description: "Freshly baked bread, cakes, pastries, and cookies every morning. Our sourdough and multigrain loaves are local favorites."
  },
  {
    id: 9,
    name: "Fresh Farm Grocery",
    category: "Grocery",
    rating: 4.3,
    reviews: 95,
    area: "Salugara",
    image: "https://images.unsplash.com/photo-1608686207856-001b95cf60ca?auto=format&fit=crop&q=80&w=800",
    deliveryTime: "30-45 mins",
    verified: true,
    description: "Farm-to-table organic produce, cold-pressed oils, and specialty grains. Supporting sustainable agriculture in North Bengal."
  },
  {
    id: 10,
    name: "Spice Route Kitchen",
    category: "Food",
    rating: 4.6,
    reviews: 278,
    area: "Pradhan Nagar",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=800",
    deliveryTime: "35-50 mins",
    verified: true,
    description: "North Indian and Bengali fusion cuisine. Our biryani, fish curry, and paneer specialties are cooked fresh for every order."
  },
  {
    id: 11,
    name: "TechZone Accessories",
    category: "Electronics",
    rating: 4.2,
    reviews: 134,
    area: "Hill Cart Road",
    image: "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?auto=format&fit=crop&q=80&w=800",
    deliveryTime: "40-60 mins",
    verified: false,
    description: "Phone cases, chargers, cables, screen protectors, and smart home gadgets. Budget-friendly tech accessories for every device."
  },
  {
    id: 12,
    name: "Trendy Threads Boutique",
    category: "Fashion",
    rating: 4.7,
    reviews: 112,
    area: "City Center",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?auto=format&fit=crop&q=80&w=800",
    deliveryTime: "1-2 days",
    verified: true,
    description: "Curated collection of Indo-western fashion for men and women. Statement pieces, casual wear, and festive collections updated every season."
  }
];

// ==========================================
// PRODUCTS — 24 products across all shops
// ==========================================
export const products = [
  // HillCart Grocery (shopId: 1)
  {
    id: 101,
    shopId: 1,
    name: "Organic Darjeeling Apples (1kg)",
    price: 180,
    originalPrice: 220,
    image: "https://images.unsplash.com/photo-1560806887-1e4cd0b6fac6?auto=format&fit=crop&q=80&w=800",
    rating: 4.5,
    inStock: true
  },
  {
    id: 102,
    shopId: 1,
    name: "Farm Fresh Whole Milk (1L)",
    price: 68,
    originalPrice: 75,
    image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?auto=format&fit=crop&q=80&w=800",
    rating: 4.7,
    inStock: true
  },
  {
    id: 103,
    shopId: 1,
    name: "Organic Turmeric & Cumin Combo",
    price: 240,
    originalPrice: 310,
    image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&q=80&w=800",
    rating: 4.6,
    inStock: true
  },
  // Darjeeling Tea Corner (shopId: 2)
  {
    id: 201,
    shopId: 2,
    name: "First Flush Premium Darjeeling Tea",
    price: 850,
    originalPrice: 999,
    image: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&q=80&w=800",
    rating: 4.9,
    inStock: true
  },
  {
    id: 202,
    shopId: 2,
    name: "Masala Chai Blend (200g)",
    price: 320,
    originalPrice: 380,
    image: "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?auto=format&fit=crop&q=80&w=800",
    rating: 4.8,
    inStock: true
  },
  {
    id: 203,
    shopId: 2,
    name: "Green Tea Loose Leaf (100g)",
    price: 450,
    originalPrice: 520,
    image: "https://images.unsplash.com/photo-1627435601361-ec25f5b1d0e5?auto=format&fit=crop&q=80&w=800",
    rating: 4.7,
    inStock: true
  },
  // North Bengal Electronics (shopId: 3)
  {
    id: 301,
    shopId: 3,
    name: "boAt Airdopes 141 Earbuds",
    price: 1299,
    originalPrice: 1990,
    image: "https://images.unsplash.com/photo-1590658268037-6bf12f032f55?auto=format&fit=crop&q=80&w=800",
    rating: 4.3,
    inStock: true
  },
  {
    id: 302,
    shopId: 3,
    name: "USB-C Fast Charging Cable (1m)",
    price: 349,
    originalPrice: 499,
    image: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&q=80&w=800",
    rating: 4.1,
    inStock: true
  },
  // Bidhan Market Fashion Hub (shopId: 4)
  {
    id: 401,
    shopId: 4,
    name: "Cotton Kurta Set (Men)",
    price: 1250,
    originalPrice: 1800,
    image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&q=80&w=800",
    rating: 4.6,
    inStock: true
  },
  {
    id: 402,
    shopId: 4,
    name: "Silk Saree — Baluchari Weave",
    price: 3500,
    originalPrice: 4200,
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&q=80&w=800",
    rating: 4.9,
    inStock: true
  },
  // Momo Street Siliguri (shopId: 5)
  {
    id: 501,
    shopId: 5,
    name: "Chicken Steamed Momos (10pcs)",
    price: 120,
    originalPrice: 150,
    image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&q=80&w=800",
    rating: 4.8,
    inStock: true
  },
  {
    id: 502,
    shopId: 5,
    name: "Veg Thukpa Bowl",
    price: 150,
    originalPrice: 180,
    image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&q=80&w=800",
    rating: 4.6,
    inStock: true
  },
  {
    id: 503,
    shopId: 5,
    name: "Fried Momos with Chutney (8pcs)",
    price: 140,
    originalPrice: 170,
    image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&q=80&w=800",
    rating: 4.7,
    inStock: true
  },
  // Himalayan Handicrafts (shopId: 6)
  {
    id: 601,
    shopId: 6,
    name: "Handwoven Bamboo Basket",
    price: 450,
    originalPrice: 550,
    image: "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?auto=format&fit=crop&q=80&w=800",
    rating: 4.7,
    inStock: true
  },
  {
    id: 602,
    shopId: 6,
    name: "Handcrafted Clay Bowl Set (4pcs)",
    price: 680,
    originalPrice: 850,
    image: "https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&q=80&w=800",
    rating: 4.8,
    inStock: true
  },
  // Siliguri MedPlus Pharmacy (shopId: 7)
  {
    id: 701,
    shopId: 7,
    name: "Vitamin C + Zinc Tablets (60 tabs)",
    price: 320,
    originalPrice: 399,
    image: "https://images.unsplash.com/photo-1584308666544-f26428f04645?auto=format&fit=crop&q=80&w=800",
    rating: 4.4,
    inStock: true
  },
  {
    id: 702,
    shopId: 7,
    name: "Digital Thermometer",
    price: 250,
    originalPrice: 350,
    image: "https://images.unsplash.com/photo-1584483766114-2cea6facdf57?auto=format&fit=crop&q=80&w=800",
    rating: 4.2,
    inStock: true
  },
  // Golden Crust Bakery (shopId: 8)
  {
    id: 801,
    shopId: 8,
    name: "Sourdough Bread Loaf",
    price: 180,
    originalPrice: 220,
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=800",
    rating: 4.9,
    inStock: true
  },
  {
    id: 802,
    shopId: 8,
    name: "Chocolate Truffle Cake (500g)",
    price: 550,
    originalPrice: 650,
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&q=80&w=800",
    rating: 4.8,
    inStock: true
  },
  // Fresh Farm Grocery (shopId: 9)
  {
    id: 901,
    shopId: 9,
    name: "Cold-Pressed Mustard Oil (1L)",
    price: 210,
    originalPrice: 260,
    image: "https://images.unsplash.com/photo-1474979266404-7eaacdc44830?auto=format&fit=crop&q=80&w=800",
    rating: 4.3,
    inStock: true
  },
  {
    id: 902,
    shopId: 9,
    name: "Farm Fresh Greens Bundle",
    price: 120,
    originalPrice: 150,
    image: "https://images.unsplash.com/photo-1518843875459-f738682238a6?auto=format&fit=crop&q=80&w=800",
    rating: 4.5,
    inStock: true
  },
  // Spice Route Kitchen (shopId: 10)
  {
    id: 1001,
    shopId: 10,
    name: "Chicken Biryani (Serves 1)",
    price: 220,
    originalPrice: 280,
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&q=80&w=800",
    rating: 4.7,
    inStock: true
  },
  {
    id: 1002,
    shopId: 10,
    name: "Paneer Butter Masala + Naan",
    price: 250,
    originalPrice: 320,
    image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&q=80&w=800",
    rating: 4.5,
    inStock: true
  },
  // Trendy Threads Boutique (shopId: 12)
  {
    id: 1201,
    shopId: 12,
    name: "Printed Summer Dress (Women)",
    price: 1450,
    originalPrice: 1999,
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&q=80&w=800",
    rating: 4.6,
    inStock: true
  }
];

// ==========================================
// CATEGORIES — 8 categories
// ==========================================
export const categories = [
  { name: "Grocery", icon: "ShoppingCart", color: "#f97316" },
  { name: "Food", icon: "Utensils", color: "#ef4444" },
  { name: "Fashion", icon: "Shirt", color: "#8b5cf6" },
  { name: "Electronics", icon: "Laptop", color: "#3b82f6" },
  { name: "Handicrafts", icon: "Palette", color: "#10b981" },
  { name: "Beverages", icon: "Coffee", color: "#d97706" },
  { name: "Pharmacy", icon: "Pill", color: "#06b6d4" },
  { name: "Bakery", icon: "CakeSlice", color: "#ec4899" }
];

// ==========================================
// TRENDING PRODUCTS — curated for Landing Page
// ==========================================
export const trendingProducts = [
  {
    id: 201,
    name: "Premium First Flush Tea",
    price: 850,
    shopName: "Darjeeling Tea Corner",
    image: "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 103,
    name: "Organic Turmeric & Cumin",
    price: 240,
    shopName: "HillCart Grocery",
    image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 602,
    name: "Handcrafted Clay Bowl Set",
    price: 680,
    shopName: "Himalayan Handicrafts",
    image: "https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 902,
    name: "Farm Fresh Greens Bundle",
    price: 120,
    shopName: "Fresh Farm Grocery",
    image: "https://images.unsplash.com/photo-1518843875459-f738682238a6?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 802,
    name: "Chocolate Truffle Cake",
    price: 550,
    shopName: "Golden Crust Bakery",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 501,
    name: "Chicken Steamed Momos",
    price: 120,
    shopName: "Momo Street Siliguri",
    image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=400&q=80"
  }
];

// ==========================================
// FEATURED SHOPS — curated for Landing Page hero
// ==========================================
export const featuredShops = [
  {
    id: 1,
    label: "HillCart Grocery",
    area: "Pradhan Nagar",
    tagline: "⭐ 4.8 (124 reviews) • Groceries",
    image: "https://img.etimg.com/thumb/width-1200,height-1200,imgsize-3317972,resizemode-75,msid-107438198/industry/cons-products/fmcg/quick-commerce-platforms-surge-rocks-neighborhood-grocery-stores.jpg"
  },
  {
    id: 2,
    label: "Darjeeling Tea Corner",
    area: "City Center",
    tagline: "⭐ 4.9 (312 reviews) • Beverages",
    image: "https://content.jdmagicbox.com/v2/comp/darjeeling/n4/9999px354.x354.230625100348.p6n4/catalogue/the-tea-shoppe-nehru-road-darjeeling-tea-stalls-8v36d0ry70.jpg"
  }
];

// ==========================================
// RECENT ORDERS — for User Profile page
// ==========================================
export const recentOrders = [
  {
    id: "ORD-8492",
    shopName: "HillCart Grocery",
    date: "Today, 10:30 AM",
    amount: 450.00,
    status: "out",
    statusLabel: "OUT FOR DELIVERY",
    iconType: "truck"
  },
  {
    id: "ORD-8485",
    shopName: "Momo Street Siliguri",
    date: "Yesterday",
    amount: 220.00,
    status: "delivered",
    statusLabel: "DELIVERED",
    iconType: "utensils"
  },
  {
    id: "ORD-8471",
    shopName: "Golden Crust Bakery",
    date: "2 days ago",
    amount: 730.00,
    status: "delivered",
    statusLabel: "DELIVERED",
    iconType: "cake"
  },
  {
    id: "ORD-8460",
    shopName: "Darjeeling Tea Corner",
    date: "3 days ago",
    amount: 1170.00,
    status: "delivered",
    statusLabel: "DELIVERED",
    iconType: "coffee"
  }
];
