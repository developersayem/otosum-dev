import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "../../../utils/db";

interface FileData {
  fileName: string;
  fileImage: string;
}
interface IEmployee {
  businessName: string;
  employeeId: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  branch: string;
  role: string;
  shopName: string;
  address: string;
  state: string;
  status: string;
  joiningDate: string;
  city: string;
  postalCode: string;
  password: string;
  img: FileData[];
}

async function generateEmployeeId(db: any): Promise<number> {
  // Find the last used employeeId from the database
  const collection = db.collection("users");

  const lastEmployeeIdDoc = await collection.findOne(
    {},
    { sort: { employeeId: -1 } }
  );

  // Get the lastEmployeeId or default to 0 if it's not a valid number
  const lastEmployeeId = isNaN(lastEmployeeIdDoc?.employeeId)
    ? 0
    : lastEmployeeIdDoc.employeeId;

  // Increment the last employeeId to generate a new one
  const newEmployeeId = lastEmployeeId + 1;

  return newEmployeeId;
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    if (!body.businessName || !body.email) {
      return NextResponse.json(
        { message: "Title, Business Name, and Category are required" },
        { status: 400 }
      );
    }
    // Connect to the database
    const { db } = await connectToDatabase(body.businessName);
    const collection = db.collection("users");
    // Check if the product already exists in the database
    const existingEmployee = await collection.findOne({
      email: body.email,
      businessName: body.businessName,
    });

    // If the product already exists, return an error
    if (existingEmployee) {
      return NextResponse.json(
        { message: "Employee already exists" },
        { status: 400 }
      );
    }

    // Generate a new Employee ID
    const employeeId = await generateEmployeeId(db);

    // Create a new Employee
    const newEmployee: IEmployee = {
      employeeId: employeeId,
      businessName: body.businessName,
      firstName: body.firstName,
      lastName: body.lastName,
      email: body.email,
      phone: body.phone,
      branch: body.branch,
      role: body.role,
      shopName: body.shopName,
      address: body.address,
      state: body.state,
      status: body.status,
      joiningDate: body.joiningDate,
      city: body.city,
      postalCode: body.postalCode,
      password: body.password,
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
