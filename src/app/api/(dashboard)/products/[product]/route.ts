import connect from "../../../../../../lib/db";
import { NextResponse } from "next/server";
import Product from "../../../../../../lib/models/product";
import User from "../../../../../../lib/models/user";
import { Types } from "mongoose";

export const GET = async (
  request: Request,
  { params }: { params: { product: string } }
) => {
  const category = params.product;
  await connect();

  console.log(category);

  if (!category || typeof category !== "string") {
    return new NextResponse(
      JSON.stringify({ message: "Category is required" })
    );
  }

  try {
    // Find products by category
    const products = await Product.find({ category: category });
    return new NextResponse(JSON.stringify({ products }), { status: 200 });
  } catch (error: any) {
    return new NextResponse(
      JSON.stringify({
        message: "Failed to fetch products",
        error: error.message,
      }),
      { status: 500 }
    );
  }
};

export const PATCH = async (request: Request, context: { params: any }) => {
  const productId = context.params.product;
  try {
    const data = await request.json();

    const { searchParams } = new URL(request.url);
    const userId = searchParams.get("userId");

    if (!userId || !Types.ObjectId.isValid(userId)) {
      return new NextResponse(JSON.stringify({ message: "Invalid userId" }), {
        status: 400,
      });
    }

    if (!productId || !Types.ObjectId.isValid(productId)) {
      return new NextResponse(JSON.stringify({ message: "Invalid product" }), {
        status: 400,
      });
    }

    await connect();

    const user = await User.findById(userId);

    if (!user) {
      return new NextResponse(JSON.stringify({ message: "User not found" }), {
        status: 400,
      });
    }

    const product = await Product.findOne({ _id: productId, user: userId });
    if (!product) {
      return new NextResponse(
        JSON.stringify({ message: "Product not found" }),
        {
          status: 400,
        }
      );
    }

    const updatedProduct = await Product.findByIdAndUpdate(productId, data, {
      new: true,
    });

    return new NextResponse(
      JSON.stringify({
        message: "Product is updated",
        product: updatedProduct,
      }),
      { status: 200 }
    );
  } catch (error: any) {
    return new NextResponse("Error in updating product" + error.message, {
      status: 500,
    });
  }
};

export const DELETE = async (request: Request, context: { params: any }) => {
  const productId = context.params.product;
  try {
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get("userId");

    if (!userId || !Types.ObjectId.isValid(userId)) {
      return new NextResponse(JSON.stringify({ message: "Invalid userId" }), {
        status: 400,
      });
    }

    if (!productId || !Types.ObjectId.isValid(productId)) {
      return new NextResponse(JSON.stringify({ message: "Invalid product" }), {
        status: 400,
      });
    }

    await connect();

    const user = await User.findById(userId);
    if (!user) {
      return new NextResponse(JSON.stringify({ message: "User not found" }), {
        status: 400,
      });
    }

    const product = await Product.findOne({ _id: productId, user: userId });

    if (!product) {
      return new NextResponse(
        JSON.stringify({
          message: "Product not found or does not belong to the user",
        }),
        {
          status: 400,
        }
      );
    }

    await Product.findByIdAndDelete(productId);
    return new NextResponse(JSON.stringify({ message: "Product deleted" }), {
      status: 200,
    });
  } catch (error: any) {
    return new NextResponse("Error in deleting product" + error.message, {
      status: 500,
    });
  }
};
