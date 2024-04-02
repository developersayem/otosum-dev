import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "../../../utils/db";

interface IProduct {
  businessName: string;
  img: string;
  productId: number;
  productName: string;
  category: string;
  subCategory?: string;
  brand: string;
  cost: number;
  quantity: number;
  alertQuantity: number;
  discountType: string;
  discount: number;
  taxType: string;
  tax: number;
  price: number;
  promotionalStatus: string;
  promotionalPrice?: number;
  promotionalStartDate?: Date;
  promotionalEndDate?: Date;
  description: string;
  name: string;
  email: string;
  role: string;
  createdAt: string;
  updatedAt: string;
}

async function generateProductId(db: any): Promise<number> {
  // Find the last used product ID from the database
  const collection = db.collection("products");
  const lastProductIdDoc = await collection.findOne(
    {},
    { sort: { productId: -1 } }
  );
  const lastProductId = lastProductIdDoc ? lastProductIdDoc.productId : 0;

  // Increment the last product ID to generate a new one
  const newProductId = lastProductId + 1;

  return newProductId;
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    // Validate the request body
    if (!body.productName || !body.businessName || !body.category) {
      return NextResponse.json(
        { message: "Product Name, Business Name, and Category are required" },
        { status: 400 }
      );
    }

    // Connect to the database
    const { db } = await connectToDatabase(body.businessName);
    const collection = db.collection("products");

    // Check if the product already exists in the database
    const existingProduct = await collection.findOne({
      productName: body.productName,
      businessName: body.businessName,
    });

    // If the product already exists, return an error
    if (existingProduct) {
      return NextResponse.json(
        { message: "Product already exists" },
        { status: 400 }
      );
    }

    // Generate a new product ID
    const productId = await generateProductId(db);

    // Create a new product
    const newProduct: IProduct = {
      businessName: body.businessName,
      productId: productId,
      productName: body.productName,
      img: body.img,
      description: body.description,
      category: body.category,
      subCategory: body.subCategory,
      brand: body.brand,
      cost: body.cost,
      quantity: body.quantity,
      alertQuantity: body.alertQuantity,
      discountType: body.discountType,
      discount: body.discount,
      taxType: body.taxType,
      tax: body.tax,
      price: body.price,
      promotionalStatus: body.status,
      promotionalPrice: body.promotionalPrice,
      promotionalStartDate: body.promotionalStartDate,
      promotionalEndDate: body.promotionalEndDate,
      name: body.name,
      email: body.email,
      role: body.role,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    console.log(newProduct);

    // Insert the new product into the database
    const result = await collection.insertOne(newProduct);

    return NextResponse.json(result, { status: 201 });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
