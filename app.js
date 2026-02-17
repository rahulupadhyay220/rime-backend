import dotenv from "dotenv";
dotenv.config();

import express from "express"
import cors from "cors";
import courseRoute from "./src/routes/courseRoutes.js";
import reviewRoute from "./src/routes/reviewRoutes.js";
import connectDB from "./src/config/MongoDB.js";
import feeRoute from "./src/routes/feeRoute.js";
import enquiryRoute from "./src/routes/enquiryRoute.js";

const app= express();
const PORT = process.env.PORT;

connectDB();

// // Middleware
app.use(cors());
app.use(express.json());

// // Routes
app.use("/api/courses", courseRoute); 
app.use("/api/reviews", reviewRoute);
app.use("/api/course/fee", feeRoute);
app.use("/api/enquiry", enquiryRoute);

app.get("/", (req,res)=>{
    res.send("Welcome to RIME Server...");
})

app.listen(PORT,()=>{
    console.log(`server in listening at PORT ${PORT}`);

})