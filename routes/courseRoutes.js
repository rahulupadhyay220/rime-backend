import express from "express";
import { createCourse, getCourses } from "../controller/courseController.js";
import authMiddleware from "../middleware/auth.js";
import authorizeRoles from "../middleware/role.js";

const router = express.Router();

// Only admins can create courses
router.post("/", authMiddleware, authorizeRoles("admin"), createCourse);

// Anyone can view courses
router.get("/", getCourses);

export default router;
