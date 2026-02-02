import express from "express";
import connectDB from "./config/db.js";
import User from "./models/User.js";

const app = express();
const PORT = 3000;

app.use(express.json());

// DELETE USER USING deleteOne (username from body)
app.delete("/user/delete", async (req, res) => {
  try {
    const { username } = req.body;

    if (!username) {
      return res.status(400).json({
        message: "Username is required"
      });
    }

    const result = await User.deleteOne({ username: username });

    if (result.deletedCount === 0) {
      return res.status(404).json({
        message: "User not found"
      });
    }

    res.status(200).json({
      message: "User deleted successfully",
      result: result
    });

  } catch (error) {
    res.status(500).json({
      message: "Error deleting user",
      error: error.message
    });
  }
});

app.listen(PORT, async () => {
  console.log(`Server running on port ${PORT}`);
  await connectDB();
});
