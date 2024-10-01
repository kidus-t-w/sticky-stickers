"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import CartDrawer from "./CartDrawer";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-sm p-4 pt-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo and Title */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="Sticky Stickers Logo"
            width={60}
            height={60}
          />
          <span className="text-2xl font-bold ml-2">Sticky Stickers</span>
        </Link>

        {/* Hamburger Icon */}
        <button
          className="md:hidden text-gray-500 hover:text-gray-700 focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
            />
          </svg>
        </button>

        {/* Navigation Links - Centered */}
        <div
          className={`md:h-10 items-center p-8 md:rounded-full md:shadow-md hidden md:flex md:space-x-8 md:absolute md:left-1/2 md:transform md:-translate-x-1/2 ${
            isMenuOpen ? "block" : "hidden"
          }`}
        >
          <Link
            href="/"
            className="block text-black hover:text-gray-700  hover:font-semibold hover:underline w-24"
          >
            Home
          </Link>
          <Link
            href="/shop"
            className="block text-black hover:text-gray-700 hover:font-semibold hover:underline w-24"
          >
            Shop
          </Link>
          <Link
            href="/about"
            className="block text-black hover:text-gray-700 hover:font-semibold hover:underline w-24"
          >
            About Us
          </Link>

          <Link
            href="/contact"
            className="block text-black hover:text-gray-700 hover:font-semibold hover:underline w-24"
          >
            Contact Us
          </Link>
        </div>

        {/* Cart Button */}
        <div className="hidden md:flex">
          <CartDrawer />
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`mt-2 md:hidden ${isMenuOpen ? "block" : "hidden"}`}>
        <div className="text-center">
          <Link href="/" className="block text-black hover:text-gray-700">
            Home
          </Link>
          <Link href="/shop" className="block text-black hover:text-gray-700">
            Shop
          </Link>
          <Link href="/about" className="block text-black hover:text-gray-700">
            About Us
          </Link>

          <Link
            href="/contact"
            className="block text-black hover:text-gray-700"
          >
            Contact Us
          </Link>
        </div>
        <div className="mt-4">
          <Link
            href="/checkout"
            className="inline-block bg-orange-500 text-white px-4 py-2 rounded-full"
          >
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
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
