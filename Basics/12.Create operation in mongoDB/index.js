import express from "express";
import connectDB from "./config/db.js";
import User from "./models/User.js";

const app = express();
const PORT = 3000;

app.use(express.json());

// CREATE USER
app.post("/user", async (req, res) => {
  try {
    const { name, age, email, username } = req.body;

    const newUser = await User.create({
      name,
      age,
      email,
      username
    });

    res.status(201).json({
      message: "User created successfully",
      user: newUser
    });

  } catch (error) {
    res.status(500).json({
      message: "Error creating user",
      error: error.message
    });
  }
});

app.listen(PORT, async () => {
  console.log(`Server running on port ${PORT}`);
  await connectDB();
});
