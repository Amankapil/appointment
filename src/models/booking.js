import mongoose from "mongoose";
const appointmentSchema = new mongoose.Schema({
  date: String,
  time: String,
  name: String,
  email: String,
  phone: String,
  person: String,
  service: String,
  status: { type: String, default: "booked" },
  meetLink: String,
  // createdAt: { type: Date, default: Date.now },
});

// export default mongoose.model("appointmentSchema", appointmentSchema);

export default mongoose.models.appointmentSchema ||
  mongoose.model("appointmentSchema", appointmentSchema);
