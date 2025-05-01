import { prisma } from "../db/db";
import * as bcrypt from "bcrypt";
import { Request, Response } from "express";

// Function to log in a user
export const loginUser = async (req: Request, res: Response): Promise<void> => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400).json({ message: "Email and password are required" });
    return;
  }

  try {
    // Find the user by email
    const user = await prisma.user.findUnique({
      where: { email },
    });

    // If user not found, return error
    if (!user) {
      res.status(401).json({ message: "Invalid credentials" });
      return;
    }

    // Compare the provided password with the stored hashed password
    const isPasswordValid = await bcrypt.compare(password, user.hashedpassword);

    // If password is invalid, return error
    if (!isPasswordValid) {
      res.status(401).json({ message: "Invalid credentials" });
      return;
    }

    res.status(200).json({
      success: true,
      message: "Login successful",
    });
  } catch (error) {
    console.error("Error logging in user:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Function to register a new user
export const registerUser = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res
      .status(400)
      .json({ success: false, message: "Email and password are required" });
    return;
  }

  try {
    // Check if the user already exists
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      res.status(409).json({ success: false, message: "User already exists" });
      return;
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = await prisma.user.create({
      data: {
        email,
        hashedpassword: hashedPassword,
      },
    });

    res.status(201).json({
      success: true,
      message: "User registered successfully",
      userId: newUser.id,
    });
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};
