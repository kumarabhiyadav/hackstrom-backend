import express, { Router } from "express";
import { verifyJwtToken } from "../../utils/middleware/JWT";
import { likePost, unlikePost } from "./like.controllers";
export const LikeRoutes: Router = express.Router();

LikeRoutes.post("/likePost", verifyJwtToken, likePost);
LikeRoutes.post("/unlikePost", verifyJwtToken, unlikePost);
