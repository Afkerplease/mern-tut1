import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
import userRoutes from "./routes/userRoutes.js";

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("conntected to db");
  })
  .catch((err) => {
    console.log(err);
  });
const app = express();
app.listen(3000, () => {
  console.log("server listening on port 3000");
});

app.use("/api/user", userRoutes);
