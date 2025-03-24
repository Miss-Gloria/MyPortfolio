import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import portfolioRouter from "./routes/portfolio_route.js";

await mongoose.connect(process.env.MONGO_URL);
console.log('Database connected successfully');

// Create an express app
const app = express();

//Use global middleware
app.use(express.json());

//use cors 
app.use(cors());

app.use(portfolioRouter)
const port = process.env.PORT || 4100;
app.listen(port, () => {
    console.log (`Server is listening on port ${port}`);
})