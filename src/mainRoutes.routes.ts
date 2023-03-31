import express, { Router } from "express";
import { AuthRoutes } from "./auth/auth.routes";
import { PostRoutes } from "./communityModule/post.routes";
const app = express();

//api/

app.use("/auth", AuthRoutes);
app.use("/post", PostRoutes);


module.exports = app;
 