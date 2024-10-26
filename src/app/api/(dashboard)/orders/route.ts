// /pages/api/checkout.ts
import { NextResponse } from "next/server";
import Order from "../../../../../lib/models/order"; // Adjust the path if necessary
import { IOrder } from "../../../../../lib/models/order"; // Import the Order interface
import connect from "../../../../../lib/db";
import Product from "../../../../../lib/models/product";
// MongoDB connection function


export const GET = async () => {
  await connect(); // Connect to MongoDB

  try {
    const orders = await Order.find(); // Fetch all orders from the database
    return new NextResponse(JSON.stringify({ message: "Orders retrieved successfully", orders }), {
      status: 200,
    });
  } catch (error: any) {
    return new NextResponse("Error retrieving orders: " + error.message, {
      status: 500,
    });
  }
};

// API route handler
export const POST = async (request: Request) => {
  await connect(); // Connect to MongoDB
  const data = await request.json();
  const { cartItems, totalAmount, totalQuantity, user } = data;

  // Basic validation
  if (!cartItems || !totalAmount || !totalQuantity || !user) {
    return new NextResponse(JSON.stringify({ message: "Required fields missing" }), {
      status: 401,
    });
  }

  try {
    // Create a new order directly from the incoming data
    const newOrder = new Order({
      cartItems,
      totalAmount,
      totalQuantity,
      user,
      // createdAt and updatedAt will be handled by Mongoose automatically
    });

    await newOrder.save(); // Save the new order to the database

    for (const item of cartItems) {
      await Product.findOneAndUpdate(
        { _id: item.id },
        { $inc: { numOrders: item.quantity } } // Increment numOrders by the quantity ordered
      );
    }

    return new NextResponse(JSON.stringify({ message: "Order placed successfully", order: newOrder }), {
      status: 201, // You might want to return a 201 status for a successful POST
    });
  } catch (error: any) {
    return new NextResponse("Error in adding product: " + error.message, {
      status: 500,
    });
  }
};
