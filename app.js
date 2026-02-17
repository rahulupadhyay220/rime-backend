import express from "express"
import dotenv from "dotenv";
import connectDB from "./config/MongoDB.js";
// import cors from "cors";
// import userRoutes from "./routes/userRuotes.js";
// import collegeRoutes from "./routes/collegeRutes.js"; 
// import courseRoutes from "./routes/courseRoutes.js"; 
// import reviewRoutes from "./route/reviewRoute.js";


const app= express();
dotenv.config();


const PORT=3000

// // Middleware
// app.use(cors());
// app.use(express.json());

// // Routes
// app.use("/api/users", userRoutes);
// app.use("/api/colleges", collegeRoutes); 
// app.use("/api/courses", courseRoutes); 
// app.use("/api/reviews", reviewRoutes);


app.listen(PORT,()=>{
    console.log(`server in listening at PORT${PORT}`);

})