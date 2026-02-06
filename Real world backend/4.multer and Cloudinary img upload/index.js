import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.json());

import authRoutes from "./routes/authRoutes.js";
app.use("/api/auth", authRoutes);

app.listen(5000, () => console.log("Server running"));
