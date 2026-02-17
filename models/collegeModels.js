import mongoose from "mongoose";

const collegeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  ranking: { type: Number, default: null },
  courses: [{ type: mongoose.Schema.Types.ObjectId, ref: "Course" }]
}, { timestamps: true });

export default mongoose.model("College", collegeSchema);
