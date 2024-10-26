"use client";
import Link from "next/link";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  clearCart,
  updateItemQuantity,
} from "../../lib/features/cart/cart-slice";
import { RootState } from "../../lib/store"; // Adjust the path to your store
import { IoMdArrowRoundBack } from "react-icons/io";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Checkout = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items); // Accessing cart items from the Redux store
  const totalAmount = useSelector((state: RootState) => state.cart.totalAmount);
  const totalQuantity = useSelector(
    (state: RootState) => state.cart.totalQuantity
  ); // Accessing total amount

  const dispatch = useDispatch(); // Initialize dispatch
  const router = useRouter();

  // State to store form input
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    location: "",
    phone: "",
    email: "",
    notes: "",
  });

  // Handle form input changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log("test");
    const orderData = {
      cartItems,
      totalAmount,
      totalQuantity,
      user: {
        firstName: formData.firstName,
        lastName: formData.lastName,
        location: formData.location,
        phone: formData.phone,
        email: formData.email,
        notes: formData.notes,
      },
    };

    try {
      const response = await fetch("/api/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderData),
      });

      if (!response.ok) {
        throw new Error("Failed to place the order");
      }

      const result = await response.json();
      console.log("Order placed successfully:", result);
      dispatch(clearCart());
      router.push("/");
      // Optionally reset the form or redirect the user
    } catch (error) {
      console.error("Error placing the order:", error);
    }
  };

  const handleClearCart = () => {
    // Dispatch the clearCart action
  };

  const handleIncreaseQuantity = (id: string, currentQuantity: number) => {
    dispatch(updateItemQuantity({ id, quantity: currentQuantity + 1 }));
  };

  // Function to handle decrementing item quantity
  const handleDecreaseQuantity = (id: string, currentQuantity: number) => {
    if (currentQuantity > 1) {
      dispatch(updateItemQuantity({ id, quantity: currentQuantity - 1 }));
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <section className=" text-black py-12 container">
        <Link href="/" className="absolute top-10 left-10">
          <IoMdArrowRoundBack className="text-4xl" />
        </Link>
        <div className="px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Order Details Form */}
          <div>
            <h2 className="text-2xl font-bold mb-6">ORDER DETAILS</h2>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="flex space-x-4">
                <div className="w-1/2">
                  <label
                    className="block text-sm font-bold mb-2"
                    htmlFor="firstName"
                  >
                    FIRST NAME <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    placeholder="First Name"
                    className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:border-orange-500"
                    value={formData.firstName}
                    onChange={handleChange}
                  />
                </div>
                <div className="w-1/2">
                  <label
                    className="block text-sm font-bold mb-2"
                    htmlFor="lastName"
                  >
                    LAST NAME <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    placeholder="Last Name"
                    className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:border-orange-500"
                    value={formData.lastName}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div>
                <label
                  className="block text-sm font-bold mb-2"
                  htmlFor="location"
                >
                  LOCATION <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="location"
                  placeholder="Location"
                  className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:border-orange-500"
                  value={formData.location}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className="block text-sm font-bold mb-2" htmlFor="phone">
                  PHONE <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="phone"
                  placeholder="Phone"
                  className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:border-orange-500"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className="block text-sm font-bold mb-2" htmlFor="email">
                  EMAIL ADDRESS <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Email Address"
                  className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:border-orange-500"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className="block text-sm font-bold mb-2" htmlFor="notes">
                  ORDER NOTES (OPTIONAL)
                </label>
                <textarea
                  id="notes"
                  placeholder="Notes about your order, e.g., special notes for delivery."
                  className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:border-orange-500 h-32"
                  value={formData.notes}
                  onChange={handleChange}
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-orange-500 text-white w-full py-3 rounded-lg shadow-md mt-6 hover:bg-orange-600"
              >
                PLACE ORDER
              </button>
            </form>
          </div>

          {/* Order Summary */}
          <div>
            <h2 className="text-2xl font-bold mb-6">SUMMARY</h2>
            <div className="space-y-4">
              <div className="flex justify-between">
                <p className="font-semibold">Product</p>
                <p className="font-semibold">Subtotal</p>
              </div>
              <div className="p-4 space-y-4 overflow-y-auto">
                {/* Display cart items dynamically */}
                {cartItems.length > 0 ? (
                  cartItems.map((item) => (
                    <div
                      key={item.id}
                      className="flex justify-between items-center border-b pb-4"
                    >
                      <div className="flex items-center">
                        <Image
                          src={
                            item.imageUrl ? item.imageUrl : "/assets/temp.jpg"
                          }
                          alt={item.title}
                          width={60}
                          height={60}
                        />
                        <div className="ml-4">
                          <h3 className="text-sm font-semibold">
                            {item.title}
                          </h3>
                          <p className="text-sm text-gray-500">
                            Size: {item.size}
                          </p>
                          <div className="flex items-center mt-2">
                            <button
                              className="border px-2"
                              onClick={() =>
                                handleDecreaseQuantity(item.id, item.quantity)
                              }
                            >
                              -
                            </button>
                            <span className="mx-2">{item.quantity}</span>
                            <button
                              className="border px-2"
                              onClick={() =>
                                handleIncreaseQuantity(item.id, item.quantity)
                              }
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
              <hr />
              <div className="flex justify-between font-semibold">
                <p>Shipping</p>
                <div>
                  <div className="mb-2">
                    <input type="radio" id="pickup" name="shipping" />
                    <label htmlFor="pickup" className="ml-2">
                      Pickup At Megenagna, Sileshi Sihin Business Center
                    </label>
                  </div>
                  <div>
                    <input type="radio" id="delivery" name="shipping" />
                    <label htmlFor="delivery" className="ml-2">
                      Delivery In Addis Ababa:{" "}
                      <span className="font-bold">BR190.00</span>
                    </label>
                  </div>
                </div>
              </div>
              <div className="p-4 border-t">
                <div className="flex justify-between items-center">
                  <p className="text-lg font-bold">Total:</p>
                  <p className="text-lg font-bold">${totalAmount.toFixed(2)}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Checkout;
