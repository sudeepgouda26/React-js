import axios from 'axios'
import React from 'react'
import { useState } from 'react'

const AddProduct = () => {
  const [product, setProduct] = useState({
    id: '',
    title: '',
    description: '',
    price: '',
    category: '',
    image: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setProduct({ ...product, [name]: value })
  }
  let{id,title,description,price,category,image}=product;

  const handleSubmit = (e) => {

 
    e.preventDefault()
      let productData = {
      id,
      title,
      description,
      price,
      category,
      image
    }
    try{
        let product = axios.post("http://localhost:5000/addproducts", productData)
        alert("Product added successfully")

    }catch(err){
      console.error('Error adding product:', err);
    }
    // Add product to the database
  }
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white px-4">
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-xl w-full max-w-md text-black space-y-4">
            <h2 className="text-2xl font-bold text-center">Add New Product</h2>
            <input
            type="text"
            name="title"
            placeholder="Product Title"
            value={product.title}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded"
            />
            <textarea
            name="description"
            placeholder="Product Description"
            value={product.description}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded"
            />
            <input
            type="number"
            name="price"
            placeholder="Price"
            value={product.price}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded"
            />
            <input
            type="text"
            name="category"
            placeholder="Category"
            value={product.category}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded"
            />
            <input
            type="text"
            name="image"
            placeholder="Image URL"
            value={product.image}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded"
            />
            <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition">
            Add Product
            </button>
        </form>
        </div>
    )
}

export default AddProduct




