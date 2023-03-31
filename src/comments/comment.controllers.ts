import { Request, Response } from "express";
import { CommentModel } from "./Comment.model";

export const createComment = async (req: any, res: Response) => {
  let { comment, user, post } = req.body;
  try {
    let insertedComment = await CommentModel.create({
      user,
      comment,
      post,
    });

    if (insertedComment) {
      let newComment = await CommentModel.findById(
        insertedComment._id
      ).populate("user");
      res.status(201).json({
        success: true,
        message: "Comment has been added",
        result: newComment,
      });
    } else {
      res.status(201).json({
        success: false,
        message: "Failed to add Comment",
        result: null,
      });
    }
  } catch (error) {
    res.status(401).json({
      success: false,
      message: "Failed to add Comment",
      error,
    });
  }
};

export const fetchComment = async (req: any, res: Response) => {
  let { post, user } = req.body;
  try {
    let comments = await CommentModel.find({
      isDeleted: false,
      post: post,
      user: user,
    })
      .populate("user")
      .sort({ createdAt: -1 });

    if (comments) {
      res.status(201).json({
        success: true,
        message: "Fetched Comments",
        result: comments,
      });
    } else {
      res.status(201).json({
        success: false,
        message: "Failed to fetch Comments",
        result: null,
      });
    }
  } catch (error) {
    res.status(401).json({
      success: false,
      message: "Failed to fetch Comments",
      error,
    });
  }
};

export const deleteComment = async (req: any, res: Response) => {
  let { commentId } = req.body;
  try {
    let comment = await CommentModel.findByIdAndUpdate(commentId, {
      isDeleted: true,
    });

    if (comment) {
      res.status(201).json({
        success: true,
        message: "delete Comment",
        result: comment,
      });
    } else {
      res.status(201).json({
        success: false,
        message: "Failed to delete Comment",
        result: null,
      });
    }
  } catch (error) {
    res.status(401).json({
      success: false,
      message: "Failed to delete Comment",
      error,
    });
  }
};
