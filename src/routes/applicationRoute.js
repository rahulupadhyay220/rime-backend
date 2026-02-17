import express from "express";
import { createApplication, getApplications } from "../controllers/applicationController.js";
import authMiddleware from "../middleware/auth.js";
import authorizeRoles from "../middleware/role.js";

const applicationRoute = express.Router();

// Students can submit applications
applicationRoute.post(
  "/",
  authMiddleware,
  authorizeRoles("student"),
  createApplication
);

// Admin can view all applications
applicationRoute.get(
  "/",
  authMiddleware,
  authorizeRoles("admin"),
  getApplications
);

export default applicationRoute;
