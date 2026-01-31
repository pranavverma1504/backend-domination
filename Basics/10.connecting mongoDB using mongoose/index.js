import express from "express";
import connectDB from "./config/db.js";

const app = express();
const PORT = 3000;

app.use(express.json());

app.listen(PORT, async () => {
  await connectDB();   // call connectDB in listen
  console.log(`Server running on port ${PORT}`);
});
