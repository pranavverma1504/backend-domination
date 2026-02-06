import User from "../models/User.js";
import bcrypt from "bcrypt";
import cloudinary from "../config/cloudinary.js";
import fs from "fs"; //  for unlink

export const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ message: "All fields required" });
    }

    // multer file
    const filePath = req.file?.path;

    // upload to cloudinary
    const result = await cloudinary.uploader.upload(filePath, {
      folder: "profile_images",
    });

    //  DELETE LOCAL FILE 
    fs.unlinkSync(filePath); // OR fs.unlink(filePath, cb)

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      profileImage: {
        url: result.secure_url,
        public_id: result.public_id,
      },
    });

    res.status(201).json({
      message: "User registered",
      user,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Registration failed" });
  }
};
