import express from "express";
import { registerUser } from "../controllers/authController.js";
import upload from "../middlewares/uploadMiddleware.js";

const router = express.Router();

router.post(
  "/register",
  upload.single("profileImage"), //  field name
  registerUser
);

export default router;
