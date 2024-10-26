import { Schema, models, model } from "mongoose";

const ProductSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: "Admin", required: true },
    productName: { type: String, required: true },
    description: { type: String, required: true },
    productStatus: { type: String, required: true },
    category: { type: String, required: true },
    numOrders: { type: Number, require: true },
    imageUrl: { type: String, require: true },
    tags: { type: [String], required: true },
  },
  { timestamps: true }
);

const Product = models.Product || model("Product", ProductSchema);

export default Product;
