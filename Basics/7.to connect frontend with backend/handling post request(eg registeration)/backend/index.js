import express from "express";
import cors from "cors";

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());              // CORS allow
app.use(express.json());      // JSON body read

// Route
app.post("/submit", function (req, res) {
  const { name, age, city } = req.body;

  res.json({
    success: true,
    message: "Data received successfully",
    data: { name, age, city }
  });
});

app.listen(PORT, function () {
  console.log(`Backend running on http://localhost:${PORT}`);
});
