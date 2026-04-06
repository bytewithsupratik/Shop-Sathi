import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { SHOPS, PRODUCTS } from '../data/mockData';

const Shop = ({ addToCart }) => {
  const { id } = useParams();
  const shop = SHOPS.find(s => s.id === parseInt(id));
  const shopProducts = PRODUCTS.filter(p => p.shopId === parseInt(id));

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <Link to="/" className="text-orange-500 font-bold mb-4 inline-block">← Back</Link>
      <h1 className="text-4xl font-bold mb-8">{shop?.name} Menu</h1>
      <div className="space-y-4">
        {shopProducts.map(product => (
          <div key={product.id} className="flex justify-between items-center p-6 bg-white border rounded-2xl shadow-sm">
            <div>
              <h3 className="text-xl font-bold">{product.name}</h3>
              <p className="text-gray-400 text-sm">{product.description}</p>
              <p className="text-orange-600 font-bold mt-2">Rs {product.price}</p>
            </div>
            <button 
              onClick={() => { addToCart(product); alert('Added to cart!'); }}
              className="bg-orange-500 text-white px-8 py-2 rounded-xl font-bold hover:bg-orange-600"
            >
              ADD
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;