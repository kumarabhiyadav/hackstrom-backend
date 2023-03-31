import express, { Router } from "express";
import { verifyJwtToken } from "../utils/middleware/JWT";
import { likePost, unlikePost } from "./like.controllers";
export const LikeRouter: Router = express.Router();

LikeRouter.post("/likePost", verifyJwtToken, likePost);
LikeRouter.post("/unlikePost", verifyJwtToken, unlikePost);
