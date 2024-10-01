"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const CartDrawer = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Cart Button (could be placed in your navbar) */}
      <button onClick={toggleDrawer}>
        <div className="inline-block bg-orange-500 text-white px-4 py-2 rounded-full">
          Br 00.0
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="inline-block w-5 h-5 ml-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 3h2l.857 4.257M7 13h10l1.857-9.257H5.857M7 13a3 3 0 11-6 0 3 3 0 016 0zm10 0a3 3 0 106 0 3 3 0 00-6 0z"
            />
          </svg>
        </div>
      </button>

      {/* Cart Drawer */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleDrawer}
      ></div>
      <div
        className={`fixed right-0 top-0 h-full w-80 bg-white shadow-lg z-50 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-4 flex items-center justify-between border-b">
          <h2 className="text-lg font-bold">Your Cart</h2>
          <button
            onClick={toggleDrawer}
            className="text-gray-500 hover:text-gray-700"
          >
            &times;
          </button>
        </div>
        <div className="p-4 space-y-4 overflow-y-auto">
          {/* Cart Item */}
          <div className="flex justify-between items-center border-b pb-4">
            <div className="flex items-center">
              <Image
                src="/logo.png"
                alt="Product Image"
                width={60}
                height={60}
              />
              <div className="ml-4">
                <h3 className="text-sm font-semibold">Code Is Art T-Shirt</h3>
                <p className="text-sm text-gray-500">Size: M</p>
                <div className="flex items-center mt-2">
                  <button className="border px-2">-</button>
                  <span className="mx-2">2</span>
                  <button className="border px-2">+</button>
                </div>
              </div>
            </div>
            <div>
              <p className="text-sm text-gray-500 line-through">$50.00</p>
              <p className="text-lg font-bold">$25.00</p>
            </div>
          </div>

          {/* Repeat Cart Items as needed */}
          {/* ... */}
        </div>

        <div className="p-4 border-t">
          <div className="flex justify-between items-center">
            <p className="text-lg font-bold">Total:</p>
            <p className="text-lg font-bold">$50.00</p>
          </div>
          <Link href="/checkout">
            <button onClick={toggleDrawer} className="bg-blue-500 text-white w-full py-2 rounded-lg mt-4">
              Checkout
            </button>
          </Link>
          <p className="text-center text-sm mt-2">
            <Link href="/shop">
              <p className="text-blue-500 hover:underline">
                Or continue shopping
              </p>
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default CartDrawer;
