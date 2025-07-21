import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { userContext } from '../UserContext/UserContext';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  let {user} = useContext(userContext);

  const fetchCartItems = async () => {
    try {
      const response = await axios.get('http://localhost:5000/carts');
      setCartItems(response.data);
    } catch (error) {
      console.error('Error fetching cart items:', error);
    }
  };

  useEffect(() => {
    fetchCartItems();
  }, []);
   const handleRemoveFromCart = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/carts/${title}`);
      setCartItems(prevItems => prevItems.filter(item => item.title !== title));
    } catch (error) {
      console.error('Error removing from cart:', error);
    }
  };

return (
    user && (
        <div className="p-6 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
            <h1 className="text-4xl font-bold text-center mb-10">🛒 Your Cart</h1>

            {cartItems.length === 0 ? (
                <p className="text-center text-gray-400">Your cart is empty</p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-3 place-items-center">
                    {cartItems.map((item) => (
                        <div
                            key={item.id}
                            className="w-72 min-h-[450px] bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-xl p-4 flex flex-col justify-between hover:scale-105 transition-all duration-300"
                        >
                            <img
                                src={item.image}
                                alt={item.name}
                                className="w-full h-48 object-cover rounded-xl"
                            />
                            <div className="mt-4 flex-1">
                                <h3 className="text-xl font-semibold">{item.title}</h3>
                                <p className="text-gray-300 text-sm mt-1 line-clamp-3">{item.description}</p>
                                <p className="text-green-400 font-bold text-lg mt-2">₹{item.price}</p>
                            </div>
                            <div className="flex flex-col gap-2 mt-4">
                                <button className="bg-red-600 text-white font-semibold px-4 py-2 rounded hover:bg-red-700 transition"   onClick={() => handleRemoveFromCart(item.title)}>
                                    Remove
                                </button>
                                <button className="bg-blue-600 text-white font-semibold px-4 py-2 rounded hover:bg-blue-700 transition">
                                    Order
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
);
};

export default Cart;
