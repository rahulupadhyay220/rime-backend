import dotenv from "dotenv";
dotenv.config();


import express from "express"
import cors from "cors";
import collegeRoute from "./src/routes/collegeRutes.js";
import courseRoute from "./src/routes/courseRoutes.js";
import reviewRoute from "./src/routes/reviewRoutes.js";
import applicationRoute from "./src/routes/applicationRoute.js";

const app= express();
const PORT = process.env.PORT;


// // Middleware
app.use(cors());
app.use(express.json());

// // Routes
app.use("/api/colleges", collegeRoute); 
app.use("/api/courses", courseRoute); 
app.use("/api/reviews", reviewRoute);
app.use("/api/applications", applicationRoute);

app.get("/", (req,res)=>{
    res.send("Welcome to RIME Server...");
})

app.listen(PORT,()=>{
    console.log(`server in listening at PORT ${PORT}`);

})