'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AddToCartPopup from './AddToCartPopup';

const ProductCard = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleAddToCart = (size: string, quantity: number) => {
    console.log(`Size: ${size}, Quantity: ${quantity}`);
    // Handle the logic to add the item to the cart
  };
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      {/* Image Section */}
      <div className="p-2">
        <Image src="/assets/temp.jpg" alt="Product Image" width={150} height={150} className="object-cover mx-auto" />
      </div>

      {/* Order Button */}
      <div className="bg-white-100 py-2 px-2 text-center">
      <button
        onClick={() => setShowPopup(true)}
        className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded-lg w-full"
      >
        Add to Cart
      </button>

      {showPopup && (
        <AddToCartPopup
          onClose={() => setShowPopup(false)}
          onAddToCart={handleAddToCart}
        />
      )}
        {/* <Link href="/order" className="w-full inline-block bg-yellow-300 text-gray-700 px-2 py-2 rounded-lg text-sm font-semibold hover:bg-yellow-400">
          <span className="mr-2 font-extrabold">+</span>Add to Cart
        </Link> */}
      </div>
    </div>
  );
};

export default ProductCard;
