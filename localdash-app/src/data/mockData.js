// --- HELPER FUNCTIONS ---
const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const randomFloat = (min, max) => (Math.random() * (max - min) + min).toFixed(1);
const randomItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

// --- DATA DICTIONARIES ---
const categories = ['Groceries & Essentials', 'Medicines & Healthcare', 'Electronics & Gadgets', 'Beverages & Snacks', 'Fresh Produce', 'Pet Supplies', 'Stationery', 'Home & Kitchen'];
const storePrefixes = ['Fresh', 'Urban', 'Metro', 'Quick', 'Daily', 'Smart', 'Prime', 'Nature', 'City', 'Global', 'Super', 'Hyper'];
const storeSuffixes = ['Mart', 'Store', 'Bazaar', 'Hub', 'Point', 'Express', 'Market', 'Shop', 'Cart', 'Zone'];

const itemAdjectives = ['Premium', 'Organic', 'Fresh', 'Classic', 'Spicy', 'Sweet', 'Crunchy', 'Imported', 'Local', 'Diet', 'Gluten-Free', 'Smart', 'Wireless', 'Ultra', 'Essential'];
const itemNouns = {
  'Groceries & Essentials': ['Rice', 'Flour', 'Oil', 'Sugar', 'Salt', 'Dal', 'Pasta', 'Noodles', 'Oats', 'Cereal'],
  'Medicines & Healthcare': ['Vitamins', 'Painkillers', 'Bandages', 'Cough Syrup', 'Sanitizer', 'Masks', 'Protein Powder', 'First Aid Kit'],
  'Electronics & Gadgets': ['Earbuds', 'Charger', 'Cable', 'Power Bank', 'Mouse', 'Keyboard', 'Drive', 'Smart Watch'],
  'Beverages & Snacks': ['Chips', 'Cookies', 'Juice', 'Soda', 'Coffee', 'Tea', 'Energy Drink', 'Chocolate', 'Nuts', 'Popcorn'],
  'Fresh Produce': ['Apples', 'Bananas', 'Tomatoes', 'Onions', 'Potatoes', 'Carrots', 'Spinach', 'Oranges', 'Grapes', 'Mangoes'],
  'Pet Supplies': ['Dog Food', 'Cat Food', 'Chew Toy', 'Litter', 'Shampoo', 'Treats', 'Collar', 'Brush'],
  'Stationery': ['Notebook', 'Pens', 'Pencils', 'Markers', 'Sticky Notes', 'Stapler', 'Paper', 'Glue'],
  'Home & Kitchen': ['Detergent', 'Dish Wash', 'Mop', 'Towels', 'Containers', 'Spoons', 'Plates', 'Trash Bags']
};

const tags = ['Bestseller', 'Trending', 'New', '', '', '', '', '']; // Blank spaces make tags rarer
const sizes = ['1 kg', '500 g', '1 L', '250 ml', 'Pack of 1', 'Pack of 3', '100 g', '1 Piece'];

// --- GENERATORS ---

// 1. Generate 100 Unique Stores
const generateStores = (count) => {
  const stores = [];
  for (let i = 1; i <= count; i++) {
    const type = randomItem(categories);
    stores.push({
      id: i,
      name: `${randomItem(storePrefixes)}${randomItem(storeSuffixes)} ${i}`, // e.g., FreshMart 1
      type: type,
      time: `${randomInt(10, 45)} min`,
      rating: randomFloat(3.5, 4.9),
      tag: randomItem(['Featured', 'Fast', 'New', '', '', '']),
      // Using Picsum with a seed ensures unique but consistent images
      img: `https://picsum.photos/seed/store${i}/500/500` 
    });
  }
  return stores;
};

// 2. Generate 100 Items per Store (Total: 10,000 Items)
const generateProducts = (stores) => {
  const products = [];
  let productId = 1001;

  stores.forEach(store => {
    // Get appropriate nouns based on store type, fallback to Groceries if undefined
    const validNouns = itemNouns[store.type] || itemNouns['Groceries & Essentials'];

    for (let j = 0; j < 100; j++) {
      products.push({
        id: productId++,
        shopId: store.id,
        name: `${randomItem(itemAdjectives)} ${randomItem(validNouns)} ${randomInt(1,99)}`, // e.g., Organic Rice 42
        size: randomItem(sizes),
        price: randomInt(20, 2000), // Prices between ₹20 and ₹2000
        tag: randomItem(tags),
        img: `https://picsum.photos/seed/prod${productId}/300/300`,
        description: `High quality ${store.type.toLowerCase()} product delivered fresh to your door.`
      });
    }
  });
  return products;
};

// --- EXPORT THE MASSIVE DATABASE ---
export const SHOPS = generateStores(100);
export const PRODUCTS = generateProducts(SHOPS);

// Keeping this static array so your Home Page "Popular Right Now" section doesn't break
export const POPULAR = [
  { id: 9001, name: "Premium Dark Chocolate", size: "100g bar", price: "299", tag: "Bestseller", img: "https://images.unsplash.com/photo-1549007994-cb92caebd54b?w=500&q=80" },
  { id: 9002, name: "Fresh Avocados", size: "Pack of 2", price: "249", tag: "Trending", img: "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?w=500&q=80" },
  { id: 9003, name: "Orange Juice", size: "1L Bottle", price: "149", tag: "New", img: "https://images.unsplash.com/photo-1600271886742-f049cd451b02?w=500&q=80" },
  { id: 9004, name: "Greek Yogurt", size: "400g", price: "180", tag: "Bestseller", img: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=500&q=80" },
];