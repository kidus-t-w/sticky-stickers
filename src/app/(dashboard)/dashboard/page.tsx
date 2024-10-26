"use client";

import { useRouter } from "next/navigation"; // Correct import for Next.js 13+
import { useEffect, useState } from "react";

const Page = () => {
  // const router = useRouter();
  // const [isAuthenticated, setIsAuthenticated] = useState(false); // Track if user is authenticated

  // useEffect(() => {
  //   const token = document.cookie
  //     .split("; ")
  //     .find((row) => row.startsWith("token="))
  //     ?.split("=")[1];

  //   if (!token) {
  //     // If no token is found, redirect to login and don't render anything
  //     router.push("/auth");
  //   } else {
  //     // Token exists, allow rendering of the page
  //     setIsAuthenticated(true);
  //     // setIsLoading(false);
  //   }
  // }, [router]);


  // if (!isAuthenticated) {
  //   // If not authenticated, we also return null, as the user should be redirected to login
  //   return null;
  // }

  // Render the dashboard content if authenticated
  return (
    <section className="min-h-screen p-6 w-full">
      <div className=" grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Dashboard Cards */}
        <div className="shadow-lg p-6 rounded-lg">
          <h3 className="text-xl font-semibold">TOTAL SALES</h3>
          <p className="text-3xl font-bold mt-2">$ 9568.19</p>
        </div>
        <div className="shadow-lg p-6 rounded-lg">
          <h3 className="text-xl font-semibold">TOTAL EARNINGS</h3>
          <p className="text-3xl font-bold mt-2">$ 4593.36</p>
        </div>
        <div className="shadow-lg p-6 rounded-lg">
          <h3 className="text-xl font-semibold">TOTAL ORDERS</h3>
          <p className="text-3xl font-bold mt-2">150 </p>
        </div>
      </div>

      {/* Earning Analytics & Mode of Order */}
      <div className=" grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        <div className="shadow-lg p-6 rounded-lg">
          <h3 className="text-xl font-semibold">Earning Analytics</h3>
          {/* Placeholder for Chart */}
          <div className="h-64 border-gray-500 border mt-4 rounded-lg flex items-center justify-center">
            {/* Replace with actual chart component */}
            <p>Chart Placeholder</p>
          </div>
        </div>
        <div className="shadow-lg p-6 rounded-lg">
          <h3 className="text-xl font-semibold">Mode of Order</h3>
          {/* Placeholder for Donut Chart */}
          <div className="h-64 border-gray-500 border mt-4 rounded-lg flex items-center justify-center">
            {/* Replace with actual donut chart component */}
            <p>Donut Chart Placeholder</p>
          </div>
        </div>
      </div>

      {/* Top Selling Products & Recent Orders */}
      <div className=" grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        <div className="shadow-lg p-6 rounded-lg">
          <h3 className="text-xl font-semibold">Top Selling Products</h3>
          <div className="mt-4">
            {/* Product Table */}
            <table className="w-full">
              <thead>
                <tr>
                  <th className="text-left p-2">PRODUCT</th>
                  <th className="text-right p-2">PRICE</th>
                  <th className="text-right p-2">ORDERS</th>
                  <th className="text-right p-2">AMOUNT</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-2">Rick and morty</td>
                  <td className="text-right p-2">$250</td>
                  <td className="text-right p-2">47</td>
                  <td className="text-right p-2">$12560</td>
                </tr>
                <tr>
                  <td className="p-2">Friends</td>
                  <td className="text-right p-2">$79</td>
                  <td className="text-right p-2">98</td>
                  <td className="text-right p-2">$2368</td>
                </tr>
                <tr>
                  <td className="p-2">Friends</td>
                  <td className="text-right p-2">$579</td>
                  <td className="text-right p-2">26</td>
                  <td className="text-right p-2">$36987</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="shadow-lg p-6 rounded-lg">
          <h3 className="text-xl font-semibold">Recent Orders</h3>
          <div className="mt-4 space-y-4">
            {/* Recent Orders List */}
            <div className="flex justify-between items-center">
              <p>Rick and morty</p>
              <p>$250</p>
            </div>
            <div className="flex justify-between items-center">
              <p>Teen wolf</p>
              <p>$99</p>
            </div>
            <div className="flex justify-between items-center">
              <p>Friends</p>
              <p>$139</p>
            </div>
            <div className="flex justify-between items-center">
              <p>Friends</p>
              <p>$79</p>
            </div>
            <div className="flex justify-between items-center">
              <p>Friends</p>
              <p>$579</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;