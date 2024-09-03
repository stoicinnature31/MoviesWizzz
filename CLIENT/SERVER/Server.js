import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { ConnectDB } from "./config/db.js";
import userRouter from "./Routes/UserRouter.js";
import { errorHandler } from "./middlewares/errorMiddleware.js";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

// Connect database
ConnectDB();

// Main Route
app.get("/", (req, res) => {
  res.send("API is running...");
});

// Other routes
app.use("/api/users", userRouter);

// Error handling Middleware
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
