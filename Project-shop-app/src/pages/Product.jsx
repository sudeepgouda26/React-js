import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Product = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/addproducts');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);
  const handleAddToCart = async (product) => {
    try {
      await axios.post('http://localhost:5000/carts', product);
      alert(`${product.title} added to cart!`);
    } catch (error) {
      console.error('Error adding to cart:', error);
      alert('Failed to add to cart!');
    }
  };

  const groupedProducts = products.reduce((groups, product) => {
    const category = product.category || 'Other';
    if (!groups[category]) {
      groups[category] = [];
    }
    groups[category].push(product);
    return groups;
  }, {});

  return (
    <div className="p-6 bg-gradient-to-br from-gray-900 via-gray-800 to-black min-h-screen text-white">
      <h1 className="text-4xl font-bold text-center mb-10">Our Products</h1>

      {Object.keys(groupedProducts).map((category) => (
        <div key={category} className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-purple-400 underline">{category}</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-3 place-items-center">
            {groupedProducts[category].map((product) => (
              <div
                key={product.id}
                className="w-72  bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-xl p-4 flex flex-col justify-between hover:scale-105 transition-all duration-300"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover rounded-xl"
                />
                <div className="mt-4 flex-1">
                  <h3 className="text-xl font-semibold">{product.title}</h3>
                  <p className="text-gray-300 text-sm mt-1 line-clamp-3">{product.description}</p>
                  <p className="text-green-400 font-bold text-lg mt-2">₹{product.price}</p>
                </div>
                <div className="flex gap-2 mt-4">
                  <button className="flex-1 bg-yellow-500 text-black font-semibold px-4 py-2 rounded hover:bg-yellow-600 transition" onClick={()=> handleAddToCart(product)}>
                    Add to Cart
                  </button>
                  <button className="flex-1 bg-blue-600 text-white font-semibold px-4 py-2 rounded hover:bg-blue-700 transition">
                    Order Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Product;
