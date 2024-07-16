import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
import usersRoute from "./routes/userRoutes.js";
import authRoute from "./routes/authRoute.js";
mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("conntected to db");
  })
  .catch((err) => {
    console.log(err);
  });
const app = express();
app.use(express.json());
app.listen(3000, () => {
  console.log("server listening on port 3000");
});

app.use("/api/user", usersRoute);
app.use("/api/auth", authRoute);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "internal Server error";
  return res.status(statusCode).json({
    success: false,
    error: message,
    statusCode,
  });
});
