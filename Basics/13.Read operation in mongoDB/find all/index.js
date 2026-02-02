import express from "express";
import connectDB from "./config/db.js";
import User from "./models/User.js";

const app = express();
const PORT = 3000;

app.use(express.json());

// GET ALL USERS
app.get("/users", async (req, res) => {
  try {
    const users = await User.find();

    res.status(200).json({
      message: "Users fetched successfully",
      users: users
    });

  } catch (error) {
    res.status(500).json({
      message: "Error fetching users",
      error: error.message
    });
  }
});

app.listen(PORT, async () => {
  console.log(`Server running on port ${PORT}`);
  await connectDB();
});
