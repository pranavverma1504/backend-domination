import express from "express";
import connectDB from "./config/db.js";
import User from "./models/User.js";

const app = express();
const PORT = 3000;

app.use(express.json());

// Updating user by UpdateOne
app.put("/user/update", async (req, res) => {
  try {
    const { username, age } = req.body;

    const result = await User.updateOne(
      { username: username },   
      { age: age }             
    );

    if (result.matchedCount === 0) {
      return res.status(404).json({
        message: "User not found"
      });
    }

    res.status(200).json({
      message: "User updated successfully",
      result: result
    });

  } catch (error) {
    res.status(500).json({
      message: "Error updating user",
      error: error.message
    });
  }
});

app.listen(PORT, async () => {
  console.log(`Server running on port ${PORT}`);
  await connectDB();
});
