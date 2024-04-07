import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "../../../utils/db";

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
    const collection = db.collection("products");

    if (body.businessName) {
      const result = await collection.deleteOne({
        productId: body.id,
      });
      // Return the products as a JSON response
      return NextResponse.json(result, { status: 200 });
    } else {
      return NextResponse.json(
        { message: "Product not found" },
        { status: 404 }
      );
    }
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
