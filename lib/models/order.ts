import mongoose, { Schema, Document, Model } from "mongoose";

// Define the interface for the cart items
interface CartItem {
  id: string;
  title: string;
  size: string;
  quantity: number;
  price: number;
  imageUrl: string;
}

// Define the interface for the order document
export interface IOrder extends Document {
  
  cartItems: CartItem[];
  totalAmount: number;
  totalQuantity: number;
  user: {
    firstName: string;
    lastName: string;
    location: string;
    phone: string;
    email: string;
    notes?: string;
  };
  status: string;  // Added for tracking order status
  payment: string; // Added for tracking payment status
  createdAt: Date;
  updatedAt: Date;
}

// Create a Mongoose schema for the order
const OrderSchema: Schema<IOrder> = new Schema(
  {
    cartItems: [
      {
        id: { type: String, required: true },
        title: { type: String, required: true },
        size: { type: String, required: true },
        quantity: { type: Number, required: true },
        price: { type: Number, required: true },
        imageUrl: { type: String, required: true },
      },
    ],
    totalAmount: { type: Number, required: true },
    totalQuantity: { type: Number, required: true },
    user: {
      firstName: { type: String, required: true },
      lastName: { type: String, required: true },
      location: { type: String, required: true },
      phone: { type: String, required: true },
      email: { type: String, required: true },
      notes: { type: String, default: "" },
    },
    status: { type: String, default: "Pending", required: true }, // Default value is "pending"
    payment: { type: String, default: "Unpaid", required: true }, // Default value is "unpaid"
  },
  {
    timestamps: true, // Automatically create `createdAt` and `updatedAt` fields
  }
);

// Create a Mongoose model for the order
const Order: Model<IOrder> = mongoose.models.Order || mongoose.model<IOrder>("Order", OrderSchema);

export default Order;
