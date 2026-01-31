import express from "express";
import authMiddleware from "./authMiddleware.js";

const app = express();
const PORT = 3000;

app.use(express.json());

app.post("/dashboard", authMiddleware, (req, res) => {
  res.json({
    message: "Welcome to dashboard"
  });
});

app.listen(PORT, () => {
  console.log("Server running");
});
