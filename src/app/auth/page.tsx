"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const LoginScreen: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    fetch("http://localhost:3000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.token) {
          // Store the JWT token in a cookie
          document.cookie = `token=${data.token};`; // 1 hour expiry

          router.push("/dashboard");
        } else {
          console.error("Login failed: Invalid credentials");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        // Show error message to the user
      });
  };

  return (
    <div className="h-screen flex flex-row items-center justify-center bg-blue-50">
      <div className="md:p-16 w-full h-full">
        <div className="flex flex-col md:flex-row justify-between items-center p-8 shadow-lg rounded-lg h-full">
          <div className="md:w-1/2 mb-8 md:mb-0 my-48 md:my-0">
            <h2 className="text-xl font-semibold text-center">
              Get Started Now
            </h2>
            <p className="mb-6 text-gray-600 text-center">
              Enter your credentials to access your account
            </p>
            {/* <button className="mb-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Log in with Google
            </button>
            <button className="mb-6 bg-black hover:bg-gray-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Log in with Apple
            </button> */}
            <hr className="mb-6 w-2/3 mx-auto" />
            <form onSubmit={handleSubmit} className="md:w-2/3 mx-auto">
              {/* <input
                type="text"
                placeholder="Name"
                value={username}
                onChange={(e) => setName(e.target.value)}
                className="mb-4 px-4 py-2 border rounded w-full"
              /> */}
              <input
                type="email"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mb-4 px-4 py-2 border rounded w-full"
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mb-4 px-4 py-2 border rounded w-full"
              />

              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
              >
                Login
              </button>
            </form>
            {/* <div className="text-center text-sm mt-4">
              Have an account?{" "}
              <a href="#" className="text-blue-600 hover:text-blue-500">
                Sign in
              </a>
            </div> */}
          </div>
          <div className="md:w-1/2 flex flex-col items-center bg-gradient-to-r from-blue-600 to-blue-400 h-full ml-8 rounded-2xl">
            {/* <img
              src="/assets/delivery.webp"
              alt="Dashboard Preview"
              className="rounded-lg shadow-lg w-1/2 p-64"
            />{" "} */}
            {/* Update with real path */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
