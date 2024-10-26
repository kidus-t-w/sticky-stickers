"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import ProductCard from "./Card";

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
  tag?: string; // Optional single tag
}

interface Products {
  product: Product;
}

const ShopNow = ({ category, title }: { category: string, title: string }) => {
  const [products, setProducts] = useState<Product[] | null>(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`/api/products/${category}`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
        setLoading(false);
      });
  }, []);

  
  if (isLoading)
    return (
      <section className="py-12 bg-gradient-to-r from-white to-orange-200 bg-cover bg-center bg-fixed">
        <div className="container mx-auto">
          
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-2xl font-semibold text-gray-800">
              {title}
            </h3>
            <Link href="/latest" className="text-orange-500 hover:underline">
              View All
            </Link>
          </div>
          <div className="container grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 mx-auto">
            {[...Array(6)].map((_, index) => (
              <div
                key={index}
                className="animate-pulse bg-gray-200 rounded-lg h-48 w-full"
              ></div>
            ))}{" "}
          </div>
        </div>
      </section>
    );

    if (!products)
      return (
        <section className="py-12 bg-gradient-to-r from-white to-orange-200 bg-cover bg-center bg-fixed">
          
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-2xl font-semibold text-gray-800">
                {title}
              </h3>
              <Link href="/latest" className="text-orange-500 hover:underline">
                View All
              </Link>
            </div>
            <div className="container grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 mx-auto">
              {[...Array(6)].map((_, index) => (
                <div
                  key={index}
                  className="animate-pulse bg-gray-200 rounded-lg h-48 w-full"
                ></div>
              ))}{" "}
            </div>
          
        </section>
      );
  
  return (
        
        <div className="mb-12">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-2xl font-semibold text-gray-800">
              {title}
            </h3>
            <Link
              href="/recommended"
              className="text-orange-500 hover:underline"
            >
              View All
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {products.slice(0, 6).map((product: Product) => (
              <ProductCard key={product._id} product={product} />
              // <p>{product}</p>
            ))}
          </div>
        </div>
  );
};

export default ShopNow;
