import express from "express";
import { enquiryForm } from "../controllers/enquiryController.js";


const enquiryRoute = express.Router();

enquiryRoute.post("/user-enquiry", enquiryForm);

export default enquiryRoute;