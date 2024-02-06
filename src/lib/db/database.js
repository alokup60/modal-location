import { MongoClient } from "mongodb";

async function connectToCluster() {
  let mongoClient;
  try {
    mongoClient = new MongoClient("mongodb://127.0.0.1:27017");
    console.log("Connecting to MongoDB Compass...");
    await mongoClient.connect();
    console.log("Successfully connected to MongoDB Compass!");
    console.log("connected to the DB.");
    return mongoClient;
  } catch (error) {
    console.error("Connection to MongoDB Atlas failed!", error);
    process.exit();
  }
}
let mongoClient = await connectToCluster();
export const test = mongoClient.db("testSeo");
export const seoColl = test.collection("seo");
