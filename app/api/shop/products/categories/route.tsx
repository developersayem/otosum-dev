import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "../../../utils/db";

interface ICategory {
  businessName: string;
  id: number;
  value: string;
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    // Validate the request body
    if (!body.businessName) {
      return NextResponse.json(
        { message: "Business Name and Category are required" },
        { status: 400 }
      );
    }

    // Connect to the database
    const { db } = await connectToDatabase(body.businessName);
    const collection = db.collection("product-categories");

    // get all categories
    const categories = await collection.find().toArray();

    return NextResponse.json(categories, { status: 201 });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
