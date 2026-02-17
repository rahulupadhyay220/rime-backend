import express from "express";
import { createCollege, getColleges } from "../controller/courseController.js"
import authMiddleware from "../middleware/auth.js";
import authorizeRoles from "../middleware/role.js";

const router = express.Router();

// Only admins can create colleges
router.post("/", authMiddleware, authorizeRoles("admin"), createCollege);

// Anyone can view colleges
router.get("/", getColleges);

export default router;
