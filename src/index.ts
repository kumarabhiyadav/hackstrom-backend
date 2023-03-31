import express, { NextFunction } from "express";
import dotenv from "dotenv";
import { mongoose } from "@typegoose/typegoose";
import FileUpload from "express-fileupload";
import cloudinary from "cloudinary";
import cors from "cors";

import { Request, Response } from "express";


const mainRoutes = require("./mainRoutes.routes");

dotenv.config();
const app = express();
const port = process.env.PORT;

app.use(FileUpload({ useTempFiles: true }));
app.use(
  cors({
    origin: "*",
  })
);

app.use(express.json({ limit: "5000mb" }));

cloudinary.v2.config({
  cloud_name: process.env.cloud_name,
  api_key: process.env.api_key,
  api_secret: process.env.api_secret,
});

// ############### === DB CONNECTION === ########################
mongoose.set("strictQuery", true);

mongoose
  .connect(process.env.DATABASEURL ?? "")
  .then(() => {
    console.log("Connected to database!");
  })
  .catch((error) => {
    console.log("Connection failed!", error);
  });

// ############### === DB CONNECTION END === ########################

app.use("/api", mainRoutes);

// Status Check
app.get("/", (req, res) => {
  res.send("Serving on port" + port);
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
