import express from "express";
import connectDB from "./config/db.js";
import User from "./models/User.js";

const app = express();
const PORT = 3000;

app.use(express.json());

// DELETE USER BY ID
app.delete("/user/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const deletedUser = await User.findByIdAndDelete(id);

    if (!deletedUser) {
      return res.status(404).json({
        message: "User not found"
      });
    }

    res.status(200).json({
      message: "User deleted successfully",
      user: deletedUser
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
