import { NextResponse } from "next/server";
import connect from "../../../../../lib/db"; // Ensure the path to your database connection file is correct
import Product from "../../../../../lib/models/product"; // Ensure the path to your Product model is correct
import Order from "../../../../../lib/models/order"; // Ensure the path to your Order model is correct

// GET Dashboard data
export const GET = async () => {
  await connect(); // Connect to MongoDB

  try {
    // Fetch total amount of money made
    const totalMoneyMade = await Product.aggregate([
      {
        $group: {
          _id: null,
          totalMoney: { $sum: { $multiply: ["$numOrders", "$price"] } },
        },
      },
    ]);

    // Fetch total number of orders
    const totalOrders = await Product.aggregate([
      {
        $group: {
          _id: null,
          totalOrders: { $sum: "$numOrders" },
        },
      },
    ]);

    // Fetch number of products
    const totalProducts = await Product.countDocuments();

    // Fetch top 5 selling products
    const topProducts = await Product.find().sort({ numOrders: -1 }).limit(5);

    // Fetch 5 most recent orders
    const recentOrders = await Order.find().sort({ createdAt: -1 }).limit(5);

    // Return the dashboard data in JSON format
    return new NextResponse(
      JSON.stringify({
        message: "Dashboard data retrieved successfully",
        totalMoneyMade: totalMoneyMade[0]?.totalMoney || 0,
        totalOrders: totalOrders[0]?.totalOrders || 0,
        totalProducts,
        topProducts,
        recentOrders,
      }),
      { status: 200 }
    );
  } catch (error: any) {
    return new NextResponse(
      JSON.stringify({ message: "Error retrieving dashboard data", error: error.message }),
      { status: 500 }
    );
  }
};
