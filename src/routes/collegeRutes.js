import express from "express";
import { createCollege, getColleges } from "../controllers/collegeControllers.js"
import authMiddleware from "../middleware/auth.js";
import authorizeRoles from "../middleware/role.js";
const collegeRoute = express.Router();

// Only admins can create colleges
collegeRoute.post("/", authMiddleware, authorizeRoles("admin"), createCollege);

// Anyone can view colleges
collegeRoute.get("/", getColleges);

export default collegeRoute;
