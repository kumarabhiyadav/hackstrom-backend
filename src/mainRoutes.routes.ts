import express, { Router } from "express";
import { AuthRoutes } from "./auth/auth.routes";
import { CommentRoutes } from "./communityModule/comments/comment.routes";
import { LikeRoutes } from "./communityModule/likes/like.routes";
import { PostRoutes } from "./communityModule/post.routes";
const app = express();

//api/

app.use("/auth", AuthRoutes);
app.use("/post", PostRoutes);
app.use("/comment", CommentRoutes);
app.use("/likes", LikeRoutes);

module.exports = app;
