import { MongoClient, Db, MongoClientOptions } from "mongodb";

const uri: string = process.env.MONGODB_URI!;
const options: MongoClientOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
} as any; // Cast options to any to bypass TypeScript checking

let client: MongoClient;
let db: Db;

async function connectToDatabase() {
  if (!client) {
    client = new MongoClient(uri, options);
    await client.connect();
    db = client.db(process.env.MONGODB_DB!);
  }
  return { client, db };
}

export { connectToDatabase };
