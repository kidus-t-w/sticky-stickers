"use client";
import LoadingSpinner from "@/components/LoadingSpinner";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Image from "next/image";

const Products = () => {
  interface Product {
    id: number;
    productName: string;
    category: string;
    numOrders: number;
    productStatus: string;
    imageUrl: string;
  }

  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState(""); 
  const [selectedCategory, setSelectedCategory] = useState(""); 

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const queryParams = new URLSearchParams({
        search: searchQuery,
        category: selectedCategory,
      }).toString();

      const response = await fetch(`/api/products?${queryParams}`);

      if (!response.ok) {
        throw new Error("Failed to fetch products");
      }

      const data = await response.json();
      setProducts(data.products);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [searchQuery, selectedCategory]);

  // if (loading) {
  //   return (
  //     <div className="flex h-screen w-full justify-center items-center">
  //       <LoadingSpinner />
  //     </div>
  //   );
  // }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="w-full pl-4 pr-12 py-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-bold text-3xl">Products</h2>
        <button className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded-lg">
          <Link href="/dashboard/products/create-product"> Add Product</Link>
        </button>
      </div>

      <div className="flex items-center mb-4">
        <input
          type="text"
          placeholder="Search by name or tag"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="border border-gray-300 rounded-md px-4 py-2 mr-4"
        />
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="border border-gray-300 rounded-md px-4 py-2"
        >
          <option value="">All Categories</option>
          <option value="Animation">Animation</option>
          <option value="Anime">Anime</option>
          <option value="Ethiopia">Ethiopia</option>
          <option value="Music">Music</option>
          <option value="Movie">Movie</option>
          <option value="Series">Series</option>
          <option value="Sport">Sport</option>
          <option value="Work">Work</option>
          <option value="School">School</option>
          <option value="Meme">Meme</option>
          <option value="Korea">Korea</option>
        </select>
      </div>

      <div className="overflow-x-auto max-h-[80vh] overflow-y-auto">
        <table className="min-w-full bg-white rounded-lg shadow-lg">
          <thead>
            <tr className="bg-gray-100 text-gray-600 uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-left">Sn</th>
              <th className="py-3 px-6 text-left">Image</th>
              <th className="py-3 px-6 text-left">Product Name</th>
              <th className="py-3 px-6 text-left">Category</th>
              <th className="py-3 px-6 text-left">Sold</th>
              <th className="py-3 px-6 text-center">Status</th>
              <th className="py-3 px-6 text-center">Action</th>
            </tr>
          </thead>
          
         
  
          <tbody className="text-gray-600 text-sm font-light ">
            {products.map((product, index) => (
              <tr
                className="border-b border-gray-200 hover:bg-gray-100"
                key={product.id}
              >
                <td className="py-3 px-6 text-left whitespace-nowrap">
                  {index + 1}
                </td>
                <td className="">
                  <Image className="md:ml-5 h-10 w-10" src={product.imageUrl} alt={product.productName} width={40} height={40} />
                </td>
                <td className="py-3 px-6 text-left">{product.productName}</td>
                <td className="py-3 px-6 text-left">{product.category}</td>
                <td className="py-3 px-6 text-left">{product.numOrders}</td>
                <td className="py-3 px-6 text-center">
                  <span
                    className={`py-1 px-3 rounded-full text-xs ${
                      product.productStatus === "inStock"
                        ? "bg-green-500 text-white"
                        : "bg-red-500 text-white"
                    }`}
                  >
                    {product.productStatus}
                  </span>
                </td>
                <td className="py-3 px-6 text-center">
                  <button className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-4 rounded-lg">
                    Edit
                  </button>
                  <button className="ml-2 bg-red-500 hover:bg-red-600 text-white py-1 px-4 rounded-lg">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
        {loading && (
        <div className="flex justify-center items-center">
          {/* <LoadingSpinner /> */}
          Loading...
        </div>
      )}
    </div>
  );
};

export default Products;
