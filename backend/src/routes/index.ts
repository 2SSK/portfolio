import express from "express";
import upload from "../config/multer";

import { loginUser, registerUser } from "../controllers/userController";
import { getBio, createBio, updateBio } from "../controllers/bioController";

const router = express.Router();

// Health Check
router.get("/health", (req, res) => {
  res.status(200).json({ status: "OK" });
});

// User Routes
router.post("/user/login", loginUser);
router.post("/user/register", registerUser);

// Bio Routes
router.post("/bio/create", upload.single("image"), createBio);
router.patch("/bio/update", upload.single("image"), updateBio);
router.get("/bio", getBio);

export default router;
