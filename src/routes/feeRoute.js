import express from 'express';
import {feeStructure} from "../controllers/feeController.js";

const feeRoute = express.Router();

feeRoute.get("/", feeStructure);

export default feeRoute;