import express from "express";
import { addReview, getReviews } from "../controllers/reviewController.js";
import authMiddleware from "../middleware/auth.js";

const router = express.Router();

// Any authenticated user can add reviews
router.post("/", authMiddleware, addReview);

// Anyone can view reviews
router.get("/", getReviews);

export default router;
