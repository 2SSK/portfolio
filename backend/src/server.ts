import app from "./app";
import "./config";
import logger from "./utils/logger";
import { prisma } from "./db/db";

const PORT = process.env.PORT || 6000;

// Start the server
app.listen(PORT, () => {
  logger.info(`Server is running on port ${PORT}`);
});

// Graceful shutdown
process.on("SIGINT", async () => {
  if (prisma) {
    await prisma.$disconnect();
  }
  process.exit(0);
});
