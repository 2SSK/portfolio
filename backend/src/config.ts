import * as dotenv from "dotenv";

// Load environment variables based on NODE_ENV
const nodeEnv = process.env.NODE_ENV || "development";
dotenv.config({
  path:
    nodeEnv === "production"
      ? ".env.production.local"
      : ".env.development.local",
});

console.log(`Running in ${nodeEnv} mode`);

// Export any config values you need throughout your app
export const config = {
  port: process.env.PORT || 5000,
  databaseUrl: process.env.DATABASE_URL,
  cloudinaryName: process.env.CLOUDINARY_NAME,
  cloudinaryApiKey: process.env.CLOUDINARY_API_KEY,
  cloudinaryApiSecret: process.env.CLOUDINARY_API_SECRET,
};
