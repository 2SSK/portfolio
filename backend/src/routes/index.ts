import express from "express";

const router = express.Router();

// Health Check
router.get("/health", (req, res) => {
  res.status(200).json({ status: "OK" });
});

// Home Route
router.get("/", (req, res) => {
  res.status(200).send("Welcome to the API!\n");
});

export default router;
