import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const AdminDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100 w-[100vw]">

      <header className="bg-white shadow-md py-4 px-6">
        <h1 className="text-3xl font-bold text-center text-gray-800">Admin Dashboard</h1>
      </header>


      <div className="flex">
  
        <aside className="w-64 bg-white border-r border-gray-300 min-h-[calc(100vh-4rem)] p-6">
          <nav className="space-y-4">
            <Link
              to="/admin/add-product"
              className="block text-lg font-medium text-blue-600 hover:underline"
            >
              ➕ Add Product
            </Link>
        
          </nav>
        </aside>

       
        <main className="flex-1 p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
