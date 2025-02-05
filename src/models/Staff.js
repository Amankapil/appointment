import mongoose from "mongoose";

const staffSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  profession: {
    type: String,
    required: true,
  },
  educations: {
    type: String,
    required: true,
  },
  experience: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.Staff || mongoose.model("Staff", staffSchema);
