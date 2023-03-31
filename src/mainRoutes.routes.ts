import express, { Router } from "express";
import { AuthRoutes } from "./auth/auth.routes";
import { ClassroomRoutes } from "./classroom/classroom.routes";
const app = express();

//api/

app.use("/auth", AuthRoutes);
app.use("/classroom", ClassroomRoutes)

module.exports = app;
 