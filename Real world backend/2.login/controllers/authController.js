import User from "../models/User.js";
import bcrypt from "bcrypt";
import generateToken from "../utils/generateToken.js";

// LOGIN
export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // 1. validation
    if (!email || !password) {
      return res.status(400).json({ message: "Email and password required" });
    }

    // 2. check user
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "user doesn't exist " });
    }

    // 3. compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // 4. generate token(function defined in utils folder)
    const token = generateToken(user._id);

    // 5. send cookie
    res
      .cookie("token", token, {
        httpOnly: true,
        sameSite: "strict",
        maxAge: 7 * 24 * 60 * 60 * 1000,
      })
      .status(200)
      .json({
        message: "Login successful",
        user: {
          id: user._id,
          name: user.name,
          username: user.username,
          email: user.email,
        },
      });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
