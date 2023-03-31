import { Request, Response } from "express";
import { PostModel } from "../posts/Post.model";
import { LikeModel } from "./like.model";

export const likePost = async (req: any, res: Response) => {
  let { user, post } = req.body;
  try {
    let like = await LikeModel.create({
      user,
      post,
    });

    if (like) {
     await PostModel.findOneAndUpdate({_id:post}, {
        $inc: { likeCounts: 1 },
      });

      res.status(201).json({
        success: true,
        message: "Liked Post",
        result: like,
      });
    } else {
      res.status(201).json({
        success: false,
        message: "Like Post",
        result: null,
      });
    }
  } catch (error) {
    res.status(401).json({
      success: false,
      message: "failed to like post",
      error,
    });
  }
};

export const unlikePost = async (req: any, res: Response) => {
  let { user, post } = req.body;
  try {
    let unliked = await LikeModel.findOneAndDelete(
      {
        user,
        post,
      },
      {
        new: true,
        runValidators: true,
      }
    );

    if (unliked) {
      await PostModel.findOneAndUpdate({_id:post}, {
        $inc: { likeCounts: -1 },
      });
      res.status(201).json({
        success: true,
        message: "unliked",
        result: unliked,
      });
    } else {
      res.status(201).json({
        success: false,
        message: "Failed to unliked",
        result: null,
      });
    }
  } catch (error) {
    res.status(401).json({
      success: false,
      message: "Failed to unlike",
      error,
    });
  }
};
