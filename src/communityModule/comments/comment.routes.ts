import express, { Router } from "express";
import { verifyJwtToken } from "../../utils/middleware/JWT";
import { createComment, deleteComment, fetchComment } from "./comment.controllers";
export const CommentRoutes: Router = express.Router();

CommentRoutes.post("/createComment", createComment);
CommentRoutes.post("/fetchComment", fetchComment);
CommentRoutes.post("/deleteComment", deleteComment);




