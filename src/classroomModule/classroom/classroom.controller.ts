import { Request, Response } from "express";
import { ClassRoomModel } from "./classroom.model";

export const createClassroom = async (req: any, res: Response) => {
  let { name, user } = req.body;
  try {
    let classRoom = await ClassRoomModel.create({
      name,
      user,
    });

    if (classRoom) {
      let classRoomNew = await ClassRoomModel.findById(classRoom._id).populate(
        "user",
        { name: 1 }
      );
      res.status(201).json({
        success: true,
        result: classRoomNew,
      });
    } else {
      res.status(201).json({
        success: false,
        result: null,
      });
    }
  } catch (error) {
    res.status(401).json({
      success: false,
      error,
    });
  }
};

export const fetchClassroomOfUser = async (req: any, res: Response) => {
  let { user } = req.body;
  try {
    let classRoom = await ClassRoomModel.find({
      isDeleted: false,
      user: user,
    })
      .populate("user")
      .sort({ createdAt: -1 });

    if (classRoom) {
      res.status(201).json({
        success: true,
        result: classRoom,
      });
    } else {
      res.status(201).json({
        success: false,
        result: null,
      });
    }
  } catch (error) {
    res.status(401).json({
      success: false,
      error,
    });
  }
};

export const deleteClassroom = async (req: any, res: Response) => {
  let { classroom } = req.body;
  try {
    let classRoom = await ClassRoomModel.findByIdAndUpdate(classroom, {
      isDeleted: true,
    });

    if (classRoom) {
      res.status(201).json({
        success: true,

        result: classRoom,
      });
    } else {
      res.status(201).json({
        success: false,
        result: null,
      });
    }
  } catch (error) {
    res.status(401).json({
      success: false,
      error,
    });
  }
};
