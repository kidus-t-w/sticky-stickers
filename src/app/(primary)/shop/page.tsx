"use client";

import React, { useEffect, useState } from "react";
import ProductCard from "@/components/Card";
import PageTitle from "@/components/PageTitle";
import LoadingSpinner from "@/components/LoadingSpinner";

interface Product {
  _id: string;
  user: string;
  productName: string;
  description: string;
  productStatus: string;
  category: string;
  numOrders: number;
  imageUrl: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
  tags?: string[]; // Optional array of tags
}

const categories = [
  { name: "Animation", count: 15 },
  { name: "Ethiopia", count: 9 },
  { name: "Music", count: 1 },
  { name: "Sports", count: 12 },
  { name: "Movies", count: 7 },
  { name: "Anime", count: 5 },
  { name: "Kprean", count: 8 },
  { name: "Work Meme", count: 3 },
];

const ProductFilterSection = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>(""); // Search term state
  const [products, setProducts] = useState<Product[] | null>(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);

      const queryParams = new URLSearchParams();

      if (selectedCategory) {
        queryParams.append("category", selectedCategory);
      }

      if (searchTerm) {
        queryParams.append("search", searchTerm); // Add search term to query
      }

      const res = await fetch(`/api/products?${queryParams.toString()}`);
      const data = await res.json();
      setProducts(data.products);
      setLoading(false);
    };

    fetchProducts();
  }, [selectedCategory, searchTerm]); // Run useEffect when category or search term changes

  // if (isLoading)
  //   return (
  //     <div className="h-[75vh] flex items-center justify-center">
  //       {/* <LoadingSpinner /> */}
  //       loading...
  //     </div>
  //   );
  if (!products) return <p>No 
    {isLoading && (
                <div className="h-[75vh] flex items-center justify-center">
                  <LoadingSpinner />
                  
                </div>
              )}
  </p>;

  return (
    <div>
      <PageTitle title="Shop" />

      <section className="bg-white py-12">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex gap-8">
            {/* Filters */}
            <aside className="bg-white rounded-xl shadow-lg w-72 h-full">
              <div className="bg-orange-500 w-full p-3 rounded-t-xl">
                <h2 className="text-xl text-white font-bold text-center">
                  Categories
                </h2>
              </div>
              <ul className="p-4">
                <li
                  onClick={() => setSelectedCategory(null)}
                  className="hover:rounded-sm hover:bg-gray-200 px-2 h-12 content-center font-semibold cursor-pointer"
                >
                  All Products
                </li>
                <hr />
                {categories.map((category, index) => (
                  <>
                    <li
                      onClick={() => setSelectedCategory(category.name)}
                      key={index}
                      className="hover:rounded-sm hover:bg-gray-200 px-2 h-12 content-center font-semibold cursor-pointer"
                    >
                      {category.name}
                    </li>
                    <hr />
                  </>
                ))}
              </ul>
            </aside>

            {/* Product Grid and Search */}
            <div className="w-3/4">
              {/* Search Bar */}
              <div className="mb-6">
                <input
                  type="text"
                  placeholder="Search products..."
                  className="w-full border border-gray-300 p-2 rounded-md"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)} // Update search term
                />
              </div>

              {/* Product Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 border-2 p-4 shadow-sm border-gray-100 rounded-xl">
                {products.map((product: Product, index) => (
                  <ProductCard product={product} key={index} />
                ))}
              </div>
              {isLoading && (
                <div className="h-[75vh] flex items-center justify-center">
                  <LoadingSpinner />
                  
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductFilterSection;
