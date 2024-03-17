// import { NextRequest, NextResponse } from "next/server";
// import { connectToDatabase } from "../utils/db";

// export async function GET(req: NextRequest) {
//   // Validate the request body
//   if (!businessName)
//     return NextResponse.json(
//       { message: "Business Name is required" },
//       { status: 400 }
//     );
//   // Connect to the database
//   const { db } = await connectToDatabase(businessName);
//   const collection = db.collection("users" ?? "defaultCollection");
//   const result = await collection.find({}).toArray();
//   //   Return the results as JSON
//   return NextResponse.json(result, {
//     status: 200,
//   });
// }
