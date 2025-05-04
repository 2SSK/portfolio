import { Request, Response } from "express";
import { v2 as cloudinary } from "cloudinary";
import { prisma } from "../db/db";
import fs from 'fs';

// Create a new bio for a user
export const createBio = async (req: Request, res: Response): Promise<void> => {
  const { email, name, title, description } = req.body;
  const imageFile = req.file;

  if (!email || !name || !title || !description) {
    res
      .status(400)
      .json({ success: false, message: "Missing required fields" });
    return;
  }

  try {
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      res.status(404).json({ success: false, message: "User not found" });
      return;
    }

    // Check if bio already exists
    const existingBio = await prisma.bio.findUnique({
      where: { userId: user.id },
    });

    if (existingBio) {
      res.status(400).json({
        success: false,
        message:
          "Bio already exists for this user. Use update endpoint instead.",
      });
      return;
    }

    // Upload image if provided
    let imageUrl = "";
    if (imageFile) {
      const imageUpload = await cloudinary.uploader.upload(imageFile.path);
      imageUrl = imageUpload.secure_url;
    }

    // Create new bio
    const newBio = await prisma.bio.create({
      data: {
        name,
        title,
        description,
        image: imageUrl,
        userId: user.id,
      },
    });

    res.status(201).json({
      success: true,
      message: "Bio created successfully",
      data: newBio,
    });
  } catch (error: unknown) {
    console.error("Error creating bio:", error);
    res.status(500).json({
      success: false,
      message: error instanceof Error ? error.message : "Internal server error",
    });
  }
};

// Update an existing bio
export const updateBio = async (req: Request, res: Response): Promise<void> => {
  const { email, name, title, description } = req.body;
  const imageFile = req.file;

  if (!email) {
    res.status(400).json({ success: false, message: "Email is required" });
    return;
  }

  try {
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      res.status(404).json({ success: false, message: "User not found" });
      return;
    }

    // Check if bio exists
    const existingBio = await prisma.bio.findUnique({
      where: { userId: user.id },
    });

    if (!existingBio) {
      res.status(404).json({ 
        success: false, 
        message: "No bio exists for this user. Use create endpoint first." 
      });
      return;
    }

    // Prepare update data
    const updateData: any = {};
    
    if (name) updateData.name = name;
    if (title) updateData.title = title;
    if (description) updateData.description = description;

    // Handle image upload with improved error handling and timeout
    if (imageFile) {
      try {
        // Set a timeout for the Cloudinary upload
        const uploadPromise = new Promise((resolve, reject) => {
          const uploadTimeout = setTimeout(() => {
            reject(new Error("Image upload timed out after 15 seconds"));
          }, 15000); // 15 seconds timeout
          
          // Configure Cloudinary with timeout options
          cloudinary.config({
            cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
            api_key: process.env.CLOUDINARY_API_KEY,
            api_secret: process.env.CLOUDINARY_API_SECRET,
            timeout: 15000 // 15 seconds timeout
          });
          
          cloudinary.uploader.upload(
            imageFile.path,
            { folder: "portfolio_bios" }, // Specify a folder for better organization
            (error, result) => {
              clearTimeout(uploadTimeout);
              if (error) {
                console.error("Cloudinary upload error:", error);
                reject(error);
              } else {
                resolve(result);
              }
            }
          );
        });
        
        const imageUpload = await uploadPromise as any;
        updateData.image = imageUpload.secure_url;
        
        // Clean up the temporary file
        if (fs.existsSync(imageFile.path)) {
          fs.unlinkSync(imageFile.path);
        }
      } catch (uploadError) {
        console.error("Image upload failed:", uploadError);
        // Don't fail the whole operation, just don't update the image field
        console.log("Continuing with update without changing the image");
      }
    }

    // Only update if there's something to update
    if (Object.keys(updateData).length === 0) {
      res.status(400).json({ 
        success: false, 
        message: "No fields provided to update" 
      });
      return;
    }

    // Update bio
    const updatedBio = await prisma.bio.update({
      where: { userId: user.id },
      data: updateData,
    });

    res.status(200).json({
      success: true,
      message: "Bio updated successfully",
      data: updatedBio,
    });
  } catch (error: unknown) {
    console.error("Error updating bio:", error);
    res.status(500).json({
      success: false,
      message: error instanceof Error ? error.message : "Internal server error",
    });
  }
};

export const getBio = async (req: Request, res: Response): Promise<void> => {
  const { email } = req.query;

  if (!email) {
    res.status(400).json({ success: false, message: "Missing email" });
    return;
  }

  try {
    const user = await prisma.user.findUnique({
      where: { email: String(email) },
    });

    if (!user) {
      res.status(404).json({ success: false, message: "User not found" });
      return;
    }

    const bio = await prisma.bio.findUnique({
      where: { userId: user.id },
    });

    if (!bio) {
      res.status(200).json({
        success: true,
        message: "No Bio for user",
        data: {
          name: "",
          title: "",
          description: "",
          image: "",
          userId: user.id,
          id: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      });
      return;
    }

    res.status(200).json({
      success: true,
      message: "Bio retrieved successfully",
      data: bio,
    });
  } catch (error: unknown) {
    res.status(500).json({
      success: false,
      message: error instanceof Error ? error.message : String(error),
    });
  }
};
