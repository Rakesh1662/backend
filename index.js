import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import userRoute from "./routes/user.route.js";

dotenv.config();

const app = express();

// middleware
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

const corsOptions = {
    origin: '*', // Allow all origins for student registration
    credentials: true
};
app.use(cors(corsOptions));

const PORT = process.env.PORT || 8000;

// api's
app.use("/api/v1/user", userRoute);

app.listen(PORT, () => {
    connectDB();
    console.log(`Server listening at port ${PORT}`);
});
