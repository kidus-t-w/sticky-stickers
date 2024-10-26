"use client";
import React, { useState } from "react";
import Image from "next/image";
import AddToCartPopup from "./AddToCartPopup";
import { MdOutlineAddShoppingCart } from "react-icons/md";

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

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div className="  overflow-hidden">
      {/* Image Section */}
      <div className="">
        <Image
          src={product.imageUrl ? product.imageUrl : "/assets/temp.png"}
          alt="Product Image"
          width={150}
          height={150}
          className="object-contain w-[150px] h-[150px] mx-auto shadow-md rounded-2xl bg-white p-2"
        />{" "}
      </div>
      {/* <hr className="w-[140px]  rounded-full mx-auto border-t-2"></hr> */}
      {/* Order Button */}
      <div className="bg-white-100 py-2 text-center ">
        <button
          onClick={() => setShowPopup(true)}
          className="bg-white hover:bg-orange-500 hover:text-white text-gray-700 border-2 border-orange-700 font-semibold py-2 px-6 rounded-2xl inline-flex items-center gap-2"
        >
          <MdOutlineAddShoppingCart />
          <span>Add to Cart</span>
        </button>

        {showPopup && (
          <AddToCartPopup
            onClose={() => setShowPopup(false)}
            product={product}
          />
        )}
      </div>
    </div>
  );
};

export default ProductCard;
