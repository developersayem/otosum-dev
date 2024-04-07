import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "../../../utils/db";

interface FileData {
  fileName: string;
  fileImage: string;
}
interface ISupplier {
  businessName: string;
  supplierId: number;
  firstName: string;
  lastName: string;
  gender: string;
  company: string;
  email: string;
  phone: string;
  role: string;
  address: string;
  state: string;
  status: string;
  city: string;
  postalCode: string;
  country: string;
  img: FileData[];
}

async function generateSupplierId(db: any): Promise<number> {
  // Find the last used employeeId from the database
  const collection = db.collection("suppliers");

  const lastSupplierIdDoc = await collection.findOne(
    {},
    { sort: { supplierId: -1 } }
  );

  // Get the lastSupplier or default to 0 if it's not a valid number
  const lastSupplierId = isNaN(lastSupplierIdDoc?.supplierId)
    ? 0
    : lastSupplierIdDoc.supplierId;

  // Increment the last SupplierId to generate a new one
  const newSupplierId = lastSupplierId + 1;

  return newSupplierId;
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    if (!body.businessName || !body.email) {
      return NextResponse.json(
        { message: "Title, Email required" },
        { status: 400 }
      );
    }
    // Connect to the database
    const { db } = await connectToDatabase(body.businessName);
    const collection = db.collection("suppliers");
    // Check if the product already exists in the database
    const existingEmployee = await collection.findOne({
      email: body.email,
      businessName: body.businessName,
    });

    // If the product already exists, return an error
    if (existingEmployee) {
      return NextResponse.json(
        { message: "Supplier already exists" },
        { status: 400 }
      );
    }

    // Generate a new Employee ID
    const supplierId = await generateSupplierId(db);

    // Create a new Employee
    const newEmployee: ISupplier = {
      supplierId: supplierId,
      businessName: body.businessName,
      firstName: body.firstName,
      lastName: body.lastName,
      email: body.email,
      phone: body.phone,
      gender: body.gender,
      address: body.address,
      state: body.state,
      status: body.status,
      role: "supplier",
      city: body.city,
      postalCode: body.postalCode,
      company: body.company,
      country: body.country,
      img: body.img,
    };

    // Insert the new Expenses into the database
    const result = await collection.insertOne(newEmployee);

    return NextResponse.json(result, { status: 201 });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
