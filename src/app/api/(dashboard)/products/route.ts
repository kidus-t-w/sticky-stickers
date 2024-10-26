import connect from "../../../../../lib/db";
import { NextResponse } from "next/server";
import Product from "../../../../../lib/models/product";
import Admin from "../../../../../lib/models/admin";
import { Types } from "mongoose";
import jwt from "jsonwebtoken"; // You'll need to install this if you haven't already



export const GET = async (request: Request) => {
  try {
    await connect();

    // Parse the URL to get the search and category query parameters
    const url = new URL(request.url);
    const search = url.searchParams.get("search") || ""; // Default to empty string
    const category = url.searchParams.get("category") || ""; // Default to empty string

    // Create a filter object based on the search and category
    const query: any = {};

    if (search) {
      // Add search filters (case-insensitive)
      query.$or = [
        { productName: { $regex: search, $options: "i" } }, // Match product name
        { tag: { $regex: search, $options: "i" } }, // Match tags
      ];
    }

    if (category) {
      // Filter by category
      query.category = category;
    }

    // Fetch products based on the query
    const products = await Product.find(query);
    
    return new NextResponse(JSON.stringify({ products }), { status: 200 });
  } catch (error: any) {
    return new NextResponse("Error in fetching products: " + error.message, {
      status: 500,
    });
  }
};

// export const GET = async (request: Request) => {
//   try {
//     const { searchParams } = new URL(request.url);
//     const adminId = searchParams.get("userId");

//     if (!adminId || !Types.ObjectId.isValid(adminId)) {
//       return new NextResponse(JSON.stringify({ message: "Invalid userId" }), {
//         status: 400,
//       });
//     }

//     await connect();

//     const user = await Admin.findById(adminId);

//     if (!user) {
//       return new NextResponse(JSON.stringify({ message: "User not found" }), {
//         status: 400,
//       });
//     }

//     const products = await Product.find({ user: new Types.ObjectId(adminId) });

//     return new NextResponse(JSON.stringify({ products }), { status: 200 });
//   } catch (error: any) {}
// };

export const POST = async (request: Request) => {
  try {
    // Extract the token from the Authorization header
    const authHeader = request.headers.get("Authorization");
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return new NextResponse(JSON.stringify({ message: "Unauthorized" }), {
        status: 401,
      });
    }

    // Extract the token from the Authorization header
    const token = authHeader.split(" ")[1];

    // Verify the token using your secret (ensure you set JWT_SECRET in your env)

    const decodedToken = jwt.verify(token, "secret");
    if (!decodedToken) {
      return new NextResponse(JSON.stringify({ message: "Invalid token" }), {
        status: 401,
      });
    }

    // Assuming the token contains the adminId (e.g., in the payload)
    const adminId = (decodedToken as jwt.JwtPayload)?.userId;
    if (!adminId || !Types.ObjectId.isValid(adminId)) {
      return new NextResponse(JSON.stringify({ message: "Invalid userId" }), {
        status: 400,
      });
    }

    // Parse the request body
    const data = await request.json();
    // Connect to the database
    await connect();

    // Find the admin by ID
    const admin = await Admin.findById(adminId);
    if (!admin) {
      return new NextResponse(JSON.stringify({ message: "Admin not found" }), {
        status: 404,
      });
    }

    // Create a new product with the admin's ID
    const newProduct = new Product({
      user: new Types.ObjectId(adminId), // Assuming adminId is a valid string
      ...data,
    });

    // Save the new product to the database
    await newProduct.save();

    return new NextResponse(
      JSON.stringify({ message: "Product added", product: newProduct }),
      {
        status: 200,
      }
    );
  } catch (error: any) {
    return new NextResponse("Error in adding product: " + error.message, {
      status: 500,
    });
  }
};
