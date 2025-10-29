import mongoose from "mongoose";

const LiveChatPaymentSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    phone: String,
    txnid: String,
    amount: Number,
    status: String, // success / failure
  },
  { timestamps: true }
);

export default mongoose.models.LiveChatPayment ||
  mongoose.model("LiveChatPayment", LiveChatPaymentSchema);
