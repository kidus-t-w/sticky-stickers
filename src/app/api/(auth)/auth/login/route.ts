import { NextResponse } from "next/server";
import { comparePassword } from "../../../../../../utils/comparePassword";
import { generateToken } from "../../../../../../lib/auth/generateToken";
import Admin from "../../../../../../lib/models/admin";
import connect from "../../../../../../lib/db";

export async function POST(request: Request) {
  const { email, password } = await request.json();
  await connect();
  const admin = await Admin.findOne({ email });
  if (!admin || !(await comparePassword(password, admin.password))) {
    return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
  }

  const token = generateToken({ userId: admin._id });

  return NextResponse.json({ token });
}
