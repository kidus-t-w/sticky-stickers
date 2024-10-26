import { NextResponse } from "next/server";
import { comparePassword } from "../../../../../utils/comparePassword";
import { generateToken } from "../../../../../lib/auth/generateToken";
import User from "../../../../../lib/models/user";

export async function POST(request: Request) {
  const { email, password } = await request.json();

  const user = await User.findOne({ email });
  if (!user || !(await comparePassword(password, user.password))) {
    return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
  }

  const token = generateToken({ userId: user._id });

  return NextResponse.json({ token });
}
