import app from "./app";
import "dotenv/config";
import logger from "./utils/logger";

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.listen(PORT, () => {
  logger.info(`Server is running on port ${PORT}`);
});
