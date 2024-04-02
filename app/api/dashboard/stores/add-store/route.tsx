import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "../../../utils/db";

interface FileData {
  fileName: string;
  fileImage: string;
}
interface IShop {
  businessName: string;
  shopId: number;
  name: string;
  address: string;
  type: string;
  img: FileData[];
}

async function generateShopId(db: any): Promise<number> {
  // Find the last used Expenses ID from the database
  const collection = db.collection("stores");
  const lastShopIdDoc = await collection.findOne({}, { sort: { ShopId: -1 } });
  const lastShopId = lastShopIdDoc ? lastShopIdDoc.ShopId : 0;

  // Increment the last Expenses ID to generate a new one
  const newShopId = lastShopId + 1;

  return newShopId;
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    if (!body.businessName || !body.name) {
      return NextResponse.json(
        { message: "Title, Business Name, and Category are required" },
        { status: 400 }
      );
    }
    console.log(body);
    // Connect to the database
    const { db } = await connectToDatabase(body.businessName);
    const collection = db.collection("stores");
    // Check if the product already exists in the database
    const existingProduct = await collection.findOne({
      name: body.name,
      businessName: body.businessName,
    });

    // If the product already exists, return an error
    if (existingProduct) {
      return NextResponse.json(
        { message: "Shop already exists" },
        { status: 400 }
      );
    }

    // Generate a new Expenses ID
    const shopId = await generateShopId(db);

    // Create a new Expenses
    const newExpenses: IShop = {
      businessName: body.businessName,
      shopId: shopId,
      name: body.name,
      address: body.address,
      type: body.type,
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
