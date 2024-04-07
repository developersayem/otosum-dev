import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "../../../utils/db";

async function generateSaleId(db: any): Promise<number> {
  // Find the last used sale ID from the database
  const collection = db.collection("sales");
  const lastSaleIdDoc = await collection.findOne({}, { sort: { saleId: -1 } });
  const lastSaleId = lastSaleIdDoc ? lastSaleIdDoc.saleId : 0;

  // Increment the last sale ID to generate a new one
  const newSaleId = lastSaleId + 1;

  return newSaleId;
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    console.log(body);

    // Validate the request body
    if (!body.businessName) {
      return NextResponse.json(
        { message: "Business Name, and email are required" },
        { status: 400 }
      );
    }

    // Connect to the database
    const { db } = await connectToDatabase(body.businessName);
    const collection = db.collection("sales");

    // Generate a new saleId ID
    const saleId = await generateSaleId(db);

    // Get current date and time
    const currentDate = new Date();
    const options: Intl.DateTimeFormatOptions = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      hour12: true, // Use 12-hour format
    };
    const salesDate = currentDate.toLocaleDateString("en-US", options);
    const salesTime = currentDate.toLocaleTimeString("en-US", options);

    // Create a new sale
    const newSales = {
      saleId: saleId,
      businessName: body.businessName,
      paymentMethod: body.paymentMethod,
      name: body.name,
      email: body.email,
      role: body.role,
      salesDate: salesDate,
      salesTime: salesTime,
      products: body.products,
    };

    // Insert the new sale document into the database
    const result = await collection.insertOne(newSales);

    return NextResponse.json(result, { status: 201 });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
