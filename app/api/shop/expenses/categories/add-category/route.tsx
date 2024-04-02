import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "../../../../utils/db";

interface ICategory {
  businessName: string;
  id: number;
  value: string;
}

async function generateExpensesCategoryId(db: any): Promise<number> {
  try {
    // Connect to the database collection
    const collection = db.collection("expenses-categories");

    // Find the last used Expenses ID from the database
    const lastExpensesCategory = await collection.findOne(
      {},
      { sort: { id: -1 } }
    );

    // Increment the last Expenses ID to generate a new one
    const newExpensesCategoryId = lastExpensesCategory
      ? lastExpensesCategory.id + 1
      : 1;

    return newExpensesCategoryId;
  } catch (error) {
    console.error("Error generating category ID:", error);
    throw error;
  }
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
    const collection = db.collection("expenses-categories");

    // Check if the product already exists in the database
    const existingProduct = await collection.findOne({
      value: body.value,
      businessName: body.businessName,
    });

    // If the product already exists, return an error
    if (existingProduct) {
      return NextResponse.json(
        { message: "category already exists" },
        { status: 400 }
      );
    }

    // Generate a new Expenses ID
    const expensesCategoryId = await generateExpensesCategoryId(db);

    // Create a new Expenses
    const newExpensesCategory: ICategory = {
      businessName: body.businessName,
      id: expensesCategoryId,
      value: body.value,
    };
    console.log(newExpensesCategory);

    // Insert the new Expenses into the database
    const result = await collection.insertOne(newExpensesCategory);

    return NextResponse.json(result, { status: 201 });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
