import { hashPassword } from "../../../../../utils/hashPassword";
import Admin from "../../../../../lib/models/admin";
import { NextResponse } from "next/server";
import connect from "../../../../../lib/db";

export const POST = async (request: Request) => {
  try {
    const data = await request.json();

    // Connect to the database
    await connect();

    // Hash the password before saving the admin
    const hashedPassword = await hashPassword(data.password);

    const newAdmin = new Admin({
      ...data,
      password: hashedPassword, // Replace the plain password with the hashed one
    });

    // Save the new admin to the database
    await newAdmin.save();

    return new NextResponse(
      JSON.stringify({
        message: "Admin is created",
        admin: newAdmin,
      }),
      { status: 200 }
    );
  } catch (error: any) {
    return new NextResponse("Error in creating admin: " + error.message, {
      status: 500,
    });
  }
};

export const GET = async (request: Request) => {
  try {
    await connect();

    const admins = await Admin.find();

    return new NextResponse(JSON.stringify({ admins }), { status: 200 });
  } catch (error: any) {}
};

export const DELETE = async (request: Request) => {
  try {
    const { searchParams } = new URL(request.url);
    const adminId = searchParams.get("adminId");

    if (!adminId) {
      return new NextResponse(JSON.stringify({ message: "Invalid adminId" }), {
        status: 400,
      });
    }

    await connect();

    const admin = await Admin.findById(adminId);

    if (!admin) {
      return new NextResponse(JSON.stringify({ message: "Admin not found" }), {
        status: 400,
      });
    }

    await admin.remove();

    return new NextResponse(JSON.stringify({ message: "Admin is deleted" }), {
      status: 200,
    });
  } catch (error: any) {
    return new NextResponse("Error in deleting admin" + error.message, {
      status: 500,
    });
  }
};
