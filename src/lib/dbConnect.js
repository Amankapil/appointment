// import mongoose from "mongoose";
// // const mongodbURL = "mongodb://localhost:27017/book";
// const mongodbURL =
//   "mongodb+srv://jagadishk48:ahLXtRbcJWjdI716@cluster0.gqxc8.mongodb.net/book?retryWrites=true&w=majority&appName=Cluster0";

// if (!mongodbURL) throw new error("please define MongoDBURL");
// let cached = global.mongoose || { conn: null, promise: null };

// async function dbConnect() {
//   if (mongoose.connection.readyState >= 1) {
//     console.log("✅ MongoDB already connected.");
//     return;
//   }

//   try {
//     await mongoose.connect(mongodbURL);
//     console.log("✅ MongoDB connected successfully.");
//   } catch (error) {
//     console.error("❌ MongoDB connection error:", error);
//   }
// }

// export default dbConnect;

import mongoose from "mongoose";

const mongodbURL = process.env.MONGO_URI;

if (!mongodbURL) throw new Error("Please define MONGO_URI in your environment");

let cached = global.mongoose || { conn: null, promise: null };

async function dbConnect() {
  if (!cached.promise) {
    console.log("⏳ Connecting to MongoDB...");
    cached.promise = mongoose.connect(mongodbURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 30000, // Increase to 30 seconds
      socketTimeoutMS: 60000, // Increase to 60 seconds
      bufferCommands: true, // Enable command buffering
      bufferTimeoutMS: 30000, // Increase Mongoose buffering timeout to 30 seconds
    });
  }
  if (cached.conn) {
    console.log("✅ MongoDB already connected.");
    return cached.conn;
  }

  try {
    cached.conn = await cached.promise;
    global.mongoose = cached;
    console.log("✅ MongoDB connected successfully.");
    return cached.conn;
  } catch (error) {
    cached.promise = null;
    console.error("❌ MongoDB connection error:", error);
    throw error;
  }
}

export default dbConnect;
