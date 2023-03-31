import { uploadFile } from "../utils/Helpers/fileUpload";
import { PostModel } from "./posts.model";
import { Request, Response } from "express";

export const createNewPost = async (req: any, res: Response) => {
  let { title, photo, user } = req.body;
  try {
    for (const file of Object.values(req.files)) {
      photo = await uploadFile(file);
    }
    let post = await PostModel.create({
      title,
      photo,
      user,
    });

    let newPost = await PostModel.findById(post._id).populate("user", {
      name: 1,
    });

    if (newPost) {
      res.status(201).json({
        success: true,
        message: "Shop Product Added Successfully",
        result: newPost,
      });
    } else {
      res.status(201).json({
        success: false,
        message: "Failed to add shop Project",
        result: newPost,
      });
    }
  } catch (error) {
    res.status(401).json({
      success: false,
      message: "Failed to add shop Project",
      error,
    });
  }
};

export const fetchPosts = async (req: any, res: Response) => {
  try {
    let posts = await PostModel.find({
      isDeleted: false,
      isActive: true,
    }).populate("user", { name: 1 });

    if (posts) {
      res.status(201).json({
        success: true,
        result: posts,
      });
    } else {
      res.status(201).json({
        success: false,
        result: posts,
      });
    }
  } catch (error) {
    res.status(401).json({
      success: false,
      message: "Failed to add shop Project",
      error,
    });
  }
};
