// // const mongodbURL =
// //   "mongodb+srv://jagadishk48:ahLXtRbcJWjdI716@cluster0.gqxc8.mongodb.net/book?retryWrites=true&w=majority&appName=Cluster0";

// import mongoose from "mongoose";

// // const mongodbURL =
// //   "mongodb+srv://jagadishk48:ahLXtRbcJWjdI716@cluster0.gqxc8.mongodb.net/book?retryWrites=true&w=majority&appName=Cluster0";
// const mongodbURL = process.env.MONGO_URI;
// if (!mongodbURL) throw new Error("Please define MONGO_URI in your environment");

// let cached = global.mongoose || { conn: null, promise: null };

// async function dbConnect() {
//   if (!cached.promise) {
//     console.log("⏳ Connecting to MongoDB...");
//     cached.promise = mongoose.connect(mongodbURL, {
//       // serverSelectionTimeoutMS: 30000, // Increase to 30 seconds
//       // socketTimeoutMS: 60000, // Increase to 60 seconds
//       // bufferCommands: true, // Enable command buffering
//       bufferTimeoutMS: 30000, // Increase Mongoose buffering timeout to 30 seconds
//     });
//   }
//   if (cached.conn) {
//     console.log("✅ MongoDB already connected.");
//     return cached.conn;
//   }

//   try {
//     cached.conn = await cached.promise;
//     global.mongoose = cached;
//     console.log("✅ MongoDB connected successfully.");
//     return cached.conn;
//   } catch (error) {
//     cached.promise = null;
//     console.error("❌ MongoDB connection error:", error);
//     throw error;
//   }
// }

// export default dbConnect;

// import mongoose from "mongoose";

// let isConnected = false;

// export const dbConnect = async () => {
//   mongoose.set("strictQuery", true);
//   if (isConnected) {
//     console.log("DB connected already");
//     return;
//   }
//   try {
//     await mongoose.connect(process.env.MONGO_URI, {
//       dbName: "book",
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//       serverSelectionTimeoutMS: 5000,
//       socketTimeoutMS: 45000,
//     });
//     isConnected = true;
//     console.log("MongoDB connected successfully");
//   } catch (error) {
//     console.error("MongoDB connection error:", error);
//   }
// };

// export default dbConnect;

// ????working fine in server

import mongoose from "mongoose";
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 5000, // Timeout after 5s instead of 30s
  socketTimeoutMS: 45000, // Close sockets after 45s of inactivity
};

export const dbConnect = async () => {
  try {
    await mongoose
      .connect(process.env.MONGO_URI, options)
      .then(() => console.log("MongoDB connected"))
      .catch((err) => console.error("MongoDB connection error:", err));
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection error:", error);
  }
};

export default dbConnect;
