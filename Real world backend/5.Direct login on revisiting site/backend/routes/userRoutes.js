import express from "express";
import checkAuth from "../middlewares/checkAuth.js";
import { getUserData } from "../controllers/userController.js";

const router = express.Router();

router.get("/getuserdata", checkAuth, getUserData);

export default router;
