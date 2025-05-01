import express from "express";
import { loginUser, registerUser } from "../controllers/userController";

const router = express.Router();

// Health Check
router.get("/health", (req, res) => {
  res.status(200).json({ status: "OK" });
});

// User Routes
router.post("/user/login", loginUser);
router.post("/user/register", registerUser);

export default router;
