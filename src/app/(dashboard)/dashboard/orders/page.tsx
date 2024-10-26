"use client";
import React, { useState, useEffect } from "react";

// Define TypeScript interfaces for the order structure
interface CartItem {
  id: string;
  title: string;
  size: string;
  quantity: number;
  price: number;
  imageUrl: string;
}

interface User {
  firstName: string;
  lastName: string;
  location: string;
  phone: string;
  email: string;
  notes?: string;
}

interface Order {
  _id: string;
  cartItems: CartItem[];
  totalAmount: number;
  totalQuantity: number;
  user: User;
  status?: string;
  payment?: string;
  createdAt: string;
  updatedAt: string;
}

const OrdersPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("All Orders");
  const [orders, setOrders] = useState<Order[]>([]); // State to hold the fetched orders
  const [loading, setLoading] = useState<boolean>(true); // State to manage loading

  // Pagination state
  const [currentPage, setCurrentPage] = useState<number>(1);
  const ordersPerPage = 10;

  // Fetch orders from the API
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await fetch("/api/orders");
        if (!response.ok) {
          throw new Error("Failed to fetch orders");
        }
        const data = await response.json();
        setOrders(data.orders);
      } catch (error) {
        console.error("Error fetching orders:", error);
      } finally {
        setLoading(false); // Stop loading whether the request was successful or not
      }
    };

    fetchOrders();
  }, []);

  // Sort orders by createdAt date in descending order
  const sortedOrders = [...orders].sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );

  // Calculate the current orders to display based on pagination
  const indexOfLastOrder = currentPage * ordersPerPage;
  const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
  const currentOrders = sortedOrders.slice(indexOfFirstOrder, indexOfLastOrder);

  // Calculate the total number of pages
  const totalPages = Math.ceil(sortedOrders.length / ordersPerPage);

  // Handle page change
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <section className="w-full text-black py-8">
      <div className="mx-auto px-6 md:px-12">
        {/* Tabs */}
        <div className="flex space-x-4 mb-6">
          {["All Orders", "Shipping", "Completed", "Canceled"].map((tab) => (
            <button
              key={tab}
              className={`${
                activeTab === tab ? "bg-gray-200 text-black" : "text-gray-500"
              } py-2 px-4 rounded-lg focus:outline-none`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Orders Table */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <table className="min-w-full bg-white">
            <thead className="bg-gray-100 text-gray-700">
              <tr>
                <th className="p-4 text-left">Orders</th>
                <th className="p-4 text-left">Date</th>
                <th className="p-4 text-left">Customer</th>
                <th className="p-4 text-left">Payment</th>
                <th className="p-4 text-left">Status</th>
                <th className="p-4 text-right">Price</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td colSpan={6} className="p-4 text-center">
                    Loading orders...
                  </td>
                </tr>
              ) : currentOrders.length > 0 ? (
                currentOrders.map((order) => (
                  <tr key={order._id} className="border-b border-gray-200">
                    <td className="p-4">
                      <div className="flex items-center">
                        <input type="checkbox" className="mr-4" />
                        <div>
                          <p className="font-semibold">
                            {order.cartItems[0]?.title || "N/A"}
                          </p>
                          <p className="text-gray-500 text-sm">#{order._id}</p>
                        </div>
                      </div>
                    </td>
                    <td className="p-4">
                      {new Date(order.createdAt).toLocaleDateString()}
                    </td>
                    <td className="p-4">
                      {`${order.user.firstName} ${order.user.lastName}`}
                    </td>
                    <td className="p-4">
                      <span
                        className={`py-1 px-3 rounded-full text-sm font-medium ${
                          order.payment === "Paid"
                            ? "bg-green-100 text-green-800"
                            : "bg-purple-100 text-purple-800"
                        }`}
                      >
                        {order.payment || "Unpaid"}
                      </span>
                    </td>
                    <td className="p-4">
                      <span
                        className={`py-1 px-3 rounded-full text-sm font-medium ${
                          order.status === "Shipping"
                            ? "bg-blue-100 text-blue-800"
                            : "bg-red-100 text-red-800"
                        }`}
                      >
                        {order.status || "Unfulfilled"}
                      </span>
                    </td>
                    <td className="p-4 text-right">
                      ${order.totalAmount.toFixed(2)}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={6} className="p-4 text-center">
                    No orders found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex justify-between items-center mt-6">
          <div className="text-gray-500">
            Showing <span className="font-semibold">{indexOfFirstOrder + 1}</span> to{" "}
            <span className="font-semibold">
              {Math.min(indexOfLastOrder, sortedOrders.length)}
            </span>{" "}
            of <span className="font-semibold">{sortedOrders.length}</span> entries
          </div>

          {/* Pagination Controls */}
          <div className="flex space-x-2">
            <button
              className={`px-4 py-2 rounded-lg ${
                currentPage === 1 ? "bg-gray-200" : "bg-gray-100 hover:bg-gray-300"
              }`}
              disabled={currentPage === 1}
              onClick={() => handlePageChange(currentPage - 1)}
            >
              Previous
            </button>
            {Array.from({ length: totalPages }, (_, index) => index + 1).map(
              (pageNumber) => (
                <button
                  key={pageNumber}
                  className={`px-4 py-2 rounded-lg ${
                    currentPage === pageNumber
                      ? "bg-blue-500 text-white"
                      : "bg-gray-100 hover:bg-gray-300"
                  }`}
                  onClick={() => handlePageChange(pageNumber)}
                >
                  {pageNumber}
                </button>
              )
            )}
            <button
              className={`px-4 py-2 rounded-lg ${
                currentPage === totalPages
                  ? "bg-gray-200"
                  : "bg-gray-100 hover:bg-gray-300"
              }`}
              disabled={currentPage === totalPages}
              onClick={() => handlePageChange(currentPage + 1)}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrdersPage;
