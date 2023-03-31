import express, { Router } from "express";
import { verifyJwtToken } from "../utils/middleware/JWT";
import { createNewPost, fetchPosts } from "./post.controller";
export const PostRoutes: Router = express.Router();

PostRoutes.post("/createNewPost", createNewPost);
PostRoutes.post("/fetchPosts", fetchPosts);
