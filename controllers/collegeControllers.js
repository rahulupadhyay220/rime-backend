import College from "../models/collegeController.js";

export const createCollege = async (req, res) => {
  try {
    const college = await College.create(req.body);
    res.status(201).json(college);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const getColleges = async (req, res) => {
  try {
    const colleges = await College.find().populate("courses");
    res.json(colleges);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
