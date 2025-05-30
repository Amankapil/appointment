// import mongoose from "mongoose";

// // const availabilitySchema = new mongoose.Schema({
// //   date: { type: String, required: true }, // Format: "YYYY-MM-DD"
// //   slots: [String], // Array of hourly time slots
// // });

// // export default mongoose.models.Availability ||
// //   mongoose.model("Availability", availabilitySchema);

// const availabilitySchema = new mongoose.Schema({
//   date: { type: String, required: true }, // Format: "YYYY-MM-DD"
//   slots: [
//     {
//       time: { type: String, required: true }, // Time slot, e.g., "09:00 - 10:00"
//       status: {
//         type: String,
//         enum: ["available", "booked"],
//         default: "available",
//       }, // Slot status
//     },
//   ],
// });

// export default mongoose.models.Availability ||
//   mongoose.model("Availability", availabilitySchema);
//  above wordkinfine

const mongoose = require("mongoose");

const availabilitySchema = new mongoose.Schema({
  date: { type: String, required: true }, // Format: "YYYY-MM-DD"
  slots: [
    {
      time: { type: String, required: true }, // Time slot, e.g., "09:00 - 10:00"
      duration: {
        type: Number,
        enum: [7, 15, 30, 45], // Duration in minutes
        required: true,
      },
      status: {
        type: String,
        enum: ["available", "booked"],
        default: "available",
      }, // Slot status
    },
  ],
});

export default mongoose.models.Availability ||
  mongoose.model("Availability", availabilitySchema);
