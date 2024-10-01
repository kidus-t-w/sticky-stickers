'use client'
import React, { useState } from 'react';
import Image from 'next/image'; // Use next/image if you are using Next.js

interface AddToCartPopupProps {
  onClose: () => void;
  onAddToCart: (size: string, quantity: number) => void;
  productImage: string; // URL of the product image
  productName: string; // Name of the product
}

const AddToCartPopup: React.FC<AddToCartPopupProps> = ({
  onClose,
  onAddToCart,
  productImage,
  productName,
}) => {
  const [size, setSize] = useState('');
  const [quantity, setQuantity] = useState(1);

  const handleSizeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSize(e.target.value);
  };

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10);
    if (value > 0) setQuantity(value);
  };

  const handleAddToCart = () => {
    if (size) {
      onAddToCart(size, quantity);
      onClose();
    } else {
      alert('Please select a size.');
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold">Add to Cart</h2>
          <button onClick={onClose} className="text-gray-600 hover:text-gray-800">
            &times;
          </button>
        </div>
        <div className="mb-4 flex items-center">
          <div className="w-1/3 mr-4">
            <Image
              src='/assets/temp.jpg'
              alt={productName}
              width={100}
              height={100}
              className="rounded-lg"
            />
          </div>
          <div className="w-2/3">
            <h3 className="text-sm font-bold mb-2">{productName}</h3>
            <label className="block text-sm font-bold mb-2">Size</label>
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
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2">Quantity</label>
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
