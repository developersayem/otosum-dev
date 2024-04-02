import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "../../utils/db";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    // Validate the request body
    if (!body.businessName) {
      return NextResponse.json(
        { message: "Business Name is required" },
        { status: 400 }
      );
    }

    // Connect to the database
    const { db } = await connectToDatabase(body.businessName);
    const collection = db.collection("expenses");
    if (body.category === "all categories") {
      const result = await collection.find({}).toArray();
      // Return the products as a JSON response
      return NextResponse.json(result, { status: 200 });
    }
    // Filter products by category if provided
    else {
      const query = { category: body.category };
      const result = await collection.find(query).toArray();
      return NextResponse.json(result, { status: 200 });
    }

    // Return the products as a JSON response
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
