import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "../../utils/db";

export async function POST(req: NextRequest) {
  const body = await req.json();
  if (!body.businessName || !body.email || !body.password) {
    return NextResponse.json(
      { error: "Missing required fields" },
      { status: 400 }
    );
  }
  // Connect to the database
  const { db } = await connectToDatabase(body.businessName);
  const collection = db.collection("users");
  // Get all users from the database
  const user = await collection.findOne({
    email: body.email,
    password: body.password,
  });
  // Return the users
  if (user) {
    return NextResponse.json(user, { status: 200 });
  } else {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }
}
