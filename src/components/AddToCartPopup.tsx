"use client";

import React, { useState, useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../lib/features/cart/cart-slice"; // Update the path according to your project structure
import Image from "next/image"; // Assuming you are using Next.js

interface AddToCartPopupProps {
  onClose: () => void;
  product: {
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
}

const AddToCartPopup: React.FC<AddToCartPopupProps> = ({ onClose, product }) => {
  const [size, setSize] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [error, setError] = useState(""); // To handle size error
  const popupRef = useRef<HTMLDivElement | null>(null);
  const dispatch = useDispatch();

  // Price calculation based on size
  const getPriceBySize = (size: string): number => {
    switch (size) {
      case "Tiny":
        return 15;
      case "Small":
        return 20;
      case "Medium":
        return 30;
      default:
        return 0;
    }
  };

  const handleSizeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSize(e.target.value);
    setError(""); // Clear error when size is selected
  };

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10);
    if (value > 0) setQuantity(value);
  };

  const handleAddToCart = () => {
    if (size) {
      const price = getPriceBySize(size);
      dispatch(
        addItem({
          imageUrl: product.imageUrl,
          id: product._id, // Pass the product ID
          title: product.productName,
          size,
          price,
          quantity,
        })
      );
      onClose(); // Close the popup after adding to cart
    } else {
      setError("Please select a size."); // Show error message
    }
  };

  // Close the popup when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
        onClose();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div ref={popupRef} className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold">Add to Cart</h2>
          <button
            onClick={onClose}
            className="text-gray-600 hover:text-gray-800"
          >
            &times;
          </button>
        </div>
        <div className="mb-4 flex items-center">
          <div className="w-1/3 mr-4">
            <Image
              src={product.imageUrl ? product.imageUrl : "/assets/temp.jpg"}
              alt={product.productName}
              width={100}
              height={100}
              className="rounded-lg w-[100px] h-[100px] object-contain"
            />
          </div>
          <div className="w-2/3">
            <h3 className="font-bold mb-2 text-left text-xl">{product.productName}</h3>
            <label className="block text-sm font-bold mb-2 text-left">Size</label>
            <select
              value={size}
              onChange={handleSizeChange}
              className="w-full p-2 border rounded-lg"
            >
              <option value="">Choose an option</option>
              <option value="Tiny">Tiny</option>
              <option value="Small">Small</option>
              <option value="Medium">Medium</option>
            </select>
            {error && <p className="text-red-500 text-sm mt-1">{error}</p>} {/* Error message */}
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2 text-left">Quantity</label>
          <input
            type="number"
            value={quantity}
            onChange={handleQuantityChange}
            className="w-full p-2 border rounded-lg"
            min="1"
          />
        </div>
        <div className="flex justify-end">
          <button
            onClick={handleAddToCart}
            className="bg-orange-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-orange-600"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddToCartPopup;
