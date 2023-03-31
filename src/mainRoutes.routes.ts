import express, { Router } from "express";
import { AuthRoutes } from "./auth/auth.routes";
const app = express();

//api/

app.use("/auth", AuthRoutes);

module.exports = app;
 