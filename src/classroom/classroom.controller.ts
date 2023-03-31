import { Request, Response } from "express";
import { ClassroomModel } from "./classroom.model";

export const createClassroom = async (req: any, res: Response) => {
  let { className, user } = req.body;
  try {
    let insertedClassroom = await ClassroomModel.create({
      user,
      className,
    });

    if (insertedClassroom) {
      let newClassroom = await ClassroomModel.findById(
        insertedClassroom._id
      ).populate("user");
      res.status(201).json({
        success: true,
        message: "Classroom has been added",
        result: newClassroom,
      });
    } else {
      res.status(201).json({
        success: false,
        message: "Failed to add Classroom",
        result: null,
      });
    }
  } catch (error) {
    res.status(401).json({
      success: false,
      message: "Failed to add Classroom",
      error,
    });
  }
};

export const fetchClassroom = async (req: any, res: Response) => {
  let { user } = req.body;
  try {
    let classes = await ClassroomModel.find({
      isDeleted: false,
      user: user,
    })
      .populate("user")
      .sort({ createdAt: -1 });
    if (classes) {
      res.status(201).json({
        success: true,
        message: "Fetched Classes",
        result: classes,
      });
    } else {
      res.status(201).json({
        success: false,
        message: "Failed to fetch Classes",
        result: null,
      });
    }
  } catch (error) {
    res.status(401).json({
      success: false,
      message: "Failed to fetch Classes",
      error,
    });
  }
};

export const deleteClass = async (req: any, res: Response) => {
  let { classId } = req.body;
  try {
    let DeleteClass = await ClassroomModel.findByIdAndUpdate(classId, {
      isDeleted: true,
    });

    if (DeleteClass) {
      res.status(201).json({
        success: true,
        message: "delete Class",
        result: DeleteClass,
      });
    } else {
      res.status(201).json({
        success: false,
        message: "Failed to delete Class",
        result: null,
      });
    }
  } catch (error) {
    res.status(401).json({
      success: false,
      message: "Failed to delete Class",
      error,
    });
  }
};
