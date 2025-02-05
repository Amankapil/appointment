import mongoose from "mongoose";
const mongodbURL = "mongodb://localhost:27017/book";
if (!mongodbURL) throw new error("please define MongoDBURL");
let cached = global.mongoose || { conn: null, promise: null };

async function dbConnect() {
  if (mongoose.connection.readyState >= 1) {
    console.log("✅ MongoDB already connected.");
    return;
  }

  try {
    await mongoose.connect(mongodbURL);
    console.log("✅ MongoDB connected successfully.");
  } catch (error) {
    console.error("❌ MongoDB connection error:", error);
  }
}

export default dbConnect;
