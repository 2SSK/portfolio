import app from "./app";
import "./config";
import logger from "./utils/logger";
import { prisma } from "./db/db";
import connectCloudinary, { initCloudinary } from "./config/cloudinary";

const PORT = process.env.PORT || 6000;

const startServer = async () => {
  try {
    await connectCloudinary();

    const cloudinary = initCloudinary();
    console.log("Cloudinary initialized with timeout settings");

    app.listen(PORT, () => {
      logger.info(`Connected to Cloudinary ${process.env.CLOUDINARY_NAME}`);
      logger.info(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Error starting the server:", error);
    process.exit(1);
  }
};

// Start the server
startServer();

// Graceful shutdown
process.on("SIGINT", async () => {
  if (prisma) {
    await prisma.$disconnect();
  }
  process.exit(0);
});
