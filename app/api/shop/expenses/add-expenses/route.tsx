import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "../../../utils/db";

interface FileData {
  fileName: string;
  fileImage: string;
}
interface IExpenses {
  businessName: string;
  expensesId: number;
  title: string;
  date: string;
  warehouse: string;
  category: string;
  amount: number;
  note: string;
  description: string;
  img: FileData[];
}

async function generateExpensesId(db: any): Promise<number> {
  // Find the last used Expenses ID from the database
  const collection = db.collection("expenses");
  const lastExpensesIdDoc = await collection.findOne(
    {},
    { sort: { expensesId: -1 } }
  );
  const lastExpensesId = lastExpensesIdDoc ? lastExpensesIdDoc.expensesId : 0;

  // Increment the last Expenses ID to generate a new one
  const newExpensesId = lastExpensesId + 1;

  return newExpensesId;
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    if (!body.businessName || !body.title) {
      return NextResponse.json(
        { message: "Title, Business Name, and Category are required" },
        { status: 400 }
      );
    }
    console.log(body);
    // Connect to the database
    const { db } = await connectToDatabase(body.businessName);
    const collection = db.collection("expenses");
    // Check if the product already exists in the database
    const existingProduct = await collection.findOne({
      title: body.title,
      businessName: body.businessName,
    });

    // If the product already exists, return an error
    if (existingProduct) {
      return NextResponse.json(
        { message: "Product already exists" },
        { status: 400 }
      );
    }

    // Generate a new Expenses ID
    const expensesId = await generateExpensesId(db);

    // Create a new Expenses
    const newExpenses: IExpenses = {
      businessName: body.businessName,
      expensesId: expensesId,
      title: body.title,
      date: body.date,
      warehouse: body.warehouse,
      category: body.category,
      amount: body.amount,
      note: body.note,
      description: body.description,
      img: body.img,
    };
    console.log(newExpenses);

    // Insert the new Expenses into the database
    const result = await collection.insertOne(newExpenses);

    return NextResponse.json(result, { status: 201 });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
