import mongoose from "mongoose";

const TransactionSchema = new mongoose.Schema(
  {
    transactionId: String,
    name: String, //
    email: String, //
    phone: String, //
    svgUrl: String,
    amount: Number, //
    status: String, //
    dob: String, //
    tob: String, //
    selectedTime: String, //
    selectedTime: String, //
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

export default mongoose.models.Transaction ||
  mongoose.model("Transaction", TransactionSchema);
