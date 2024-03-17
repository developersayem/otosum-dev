import { NextRequest, NextResponse } from "next/server";

import { MongoClient } from "mongodb";
import { connectToDatabase } from "../../utils/db";

interface User {
  name: string;
  email: string;
  businessName: string;
  category: string;
  password: string;
}
const uri = process.env.MONGODB_URI || "mongodb://localhost:27017"; // MongoDB connection string
const options = {};

async function createDatabase(dbName: string) {
  const client = new MongoClient(uri, options);
  await client.connect();
  const db = client.db(dbName);
  console.log(`Database ${dbName} created successfully`);
  await client.close();
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  // Validate the request body
  if (!body.name)
    return NextResponse.json({ message: "name is required" }, { status: 400 });
  // Connect to the database
  createDatabase(body.name);
  const { db } = await connectToDatabase(body.businessName);
  const collection = db.collection("users");
  // Create a new user in the database
  // Check if the user already exists in the database
  const existingUser = await collection.findOne({
    businessName: body.businessName,
  });
  // If the user already exists, return an error
  if (existingUser) {
    return NextResponse.json(
      {
        message: "User already exists with this email.",
      },
      {
        status: 400,
      }
    );
  }
  // If the user does not exist, create a new user in the database
  const newUser: User = {
    name: body.name,
    email: body.email,
    password: body.password,
    businessName: body.businessName,
    category: body.category,
  };
  console.log(newUser);

  // Return a response to the client
  const result = await collection.insertOne(newUser);

  return NextResponse.json(result, { status: 201 });
}
