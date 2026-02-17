import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
  title: { type: String, required: true },
  duration: { type: String }, // e.g., "3 years"
  fees: { type: Number },
  college: { type: mongoose.Schema.Types.ObjectId, ref: "College" }
}, { timestamps: true });

export default mongoose.model("Course", courseSchema);
