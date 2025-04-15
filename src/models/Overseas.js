import mongoose from "mongoose";

const Overseas = new mongoose.Schema(
  {
    transactionId: String,
    paymentMode: String,
    name: String, //
    email: String, //
    phone: String, //
    filePath: String,
    amount: Number, //
    status: String, //
    dob: String, //
    tob: String, //
    latitude: Number,
    longitude: Number,
    selectedTime: String, //
    selectedDate: String, //
    gender: String, //
    marital: String,
    country: String, //
    state: String, //
    city: String, //
    session: Number, //
    paymentMethod: String,
    createdAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

export default mongoose.models.Overseas || mongoose.model("Overseas", Overseas);
