const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// In-memory data (mocking a database since MongoDB is not allowed)
let shops = [
  { id: 1, name: "HillCart Grocery", category: "Grocery", rating: 4.8, reviews: 124, area: "Hill Cart Road", deliveryTime: "15-20 mins", verified: true },
  { id: 2, name: "Darjeeling Tea Corner", category: "Beverages", rating: 4.9, reviews: 312, area: "Pradhan Nagar", deliveryTime: "25-30 mins", verified: true },
];

let products = [
  { id: 101, shopId: 1, name: "Organic Darjeeling Apples", price: 180, rating: 4.5, inStock: true },
  { id: 102, shopId: 2, name: "First Flush Premium Darjeeling Tea", price: 850, rating: 4.9, inStock: true },
];

let orders = [];

// API Routes
app.get('/api/shops', (req, res) => {
  res.json(shops);
});

app.get('/api/shops/:id', (req, res) => {
  const shop = shops.find(s => s.id === parseInt(req.params.id));
  if (shop) {
    res.json(shop);
  } else {
    res.status(404).json({ message: 'Shop not found' });
  }
});

app.get('/api/products', (req, res) => {
  const { shopId } = req.query;
  if (shopId) {
    const shopProducts = products.filter(p => p.shopId === parseInt(shopId));
    res.json(shopProducts);
  } else {
    res.json(products);
  }
});

app.post('/api/orders', (req, res) => {
  const newOrder = {
    id: `ORD-${Date.now()}`,
    ...req.body,
    status: 'Pending',
    createdAt: new Date()
  };
  orders.push(newOrder);
  res.status(201).json(newOrder);
});

// Dashboard routes (Seller)
app.get('/api/seller/orders', (req, res) => {
  // In a real app, this would filter by seller ID
  res.json(orders);
});

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Shop Sathi Backend is running seamlessly in Siliguri!' });
});

app.listen(PORT, () => {
  console.log(`Shop Sathi Server running on port ${PORT}`);
});
