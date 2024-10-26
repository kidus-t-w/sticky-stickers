"use client";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../lib/store"; // Adjust the path to your store
import Image from "next/image";
import Link from "next/link";
import { addItem, removeItem, updateItemQuantity, clearCart } from "../lib/features/cart/cart-slice"; // Import actions

// Define CartItem type if not already defined
interface CartItem {
  id: string;
  title: string;
  price: number;
  quantity: number;
  size: string;
  imageUrl: string;
}

const CartDrawer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch(); // Initialize dispatch
  const cartItems: CartItem[] = useSelector((state: RootState) => state.cart.items); // Use the CartItem type
  const totalAmount = useSelector((state: RootState) => state.cart.totalAmount); // Accessing total amount

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  const increaseQuantity = (item: CartItem) => {
    dispatch(addItem({ ...item, quantity: 1 })); // Reuse addItem action to increase quantity
  };

  const decreaseQuantity = (item: CartItem) => {
    if (item.quantity > 1) {
      dispatch(updateItemQuantity({ id: item.id, quantity: item.quantity - 1 })); // Decrease quantity
    } else {
      dispatch(removeItem(item.id)); // Remove item if quantity is 1
    }
  };

  const handleClearCart = () => {
    dispatch(clearCart()); // Dispatch the clearCart action
  };

  return (
    <>
      {/* Cart Button (could be placed in your navbar) */}
      <button onClick={toggleDrawer}>
        <div className="inline-block bg-orange-500 text-white px-4 py-2 rounded-full">
          Br {totalAmount.toFixed(2)} {/* Display total amount */}
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
          {/* Display cart items dynamically */}
          {cartItems.length > 0 ? (
            cartItems.map((item: CartItem) => (
              <div
                key={item.id}
                className="flex justify-between items-center border-b pb-4"
              >
                <div className="flex items-center">
                  <Image
                    src={item.imageUrl ? item.imageUrl : "/assets/temp.jpg"}
                    alt={item.title}
                    width={60}
                    height={60}
                  />
                  <div className="ml-4">
                    <h3 className="text-sm font-semibold">{item.title}</h3>
                    <p className="text-sm text-gray-500">Size: {item.size}</p>
                    <div className="flex items-center mt-2">
                      <button
                        onClick={() => decreaseQuantity(item)}
                        className="border px-2"
                      >
                        -
                      </button>
                      <span className="mx-2">{item.quantity}</span>
                      <button
                        onClick={() => increaseQuantity(item)}
                        className="border px-2"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
                <div>
                  <p className="text-lg font-bold">${item.price}</p>
                </div>
              </div>
            ))
          ) : (
            <p>Your cart is empty</p>
          )}
        </div>

        <div className="p-4 border-t">
          <div className="flex justify-between items-center">
            <p className="text-lg font-bold">Total:</p>
            <p className="text-lg font-bold">${totalAmount.toFixed(2)}</p>
          </div>
          <Link href="/checkout">
            <button
              onClick={toggleDrawer}
              className="bg-blue-500 text-white w-full py-2 rounded-lg mt-4"
            >
              Checkout
            </button>
          </Link>
          <div className="text-center text-sm mt-2">
            <Link href="/shop">
              <p className="text-blue-500 hover:underline">
                Or continue shopping
              </p>
            </Link>
          </div>
        </div>

        <div className="p-4">
          <button
            onClick={handleClearCart}
            className="bg-red-500 text-white w-full py-2 rounded-lg"
          >
            Clear Cart
          </button>
        </div>
      </div>
    </>
  );
};

export default CartDrawer;
