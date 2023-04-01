import { Request, Response } from "express";
import { AttendanceModel } from "./attendance.model";

export const logAttendance = async (req: any, res: Response) => {
  let { class, user, lecture } = req.body;
  try {
    let loggedAttendance = await AttendanceModel.create({
      class._id,
      user._id,
      lecture._id,
    });

    let temp = loggedTime.split(':');
    let acceptableTime = temp[0]*60+temp[1]+30;
    let ok = (loggedTime < acceptableTime)
    if(lecture.end_time)

    if (loggedAttendance) {
      let newAttendance = await AttendanceModel.findById(
        loggedAttendance._id
      ).populate("subj", { name: 1 });
      res.status(201).json({
        success: true,
        message: "Attendance has been logged",
        result: loggedAttendance,
      });
    } else {
      res.status(201).json({
        success: false,
        message: "Failed to log Attendance",
        result: null,
      });
    }
  } catch (error) {
    res.status(401).json({
      success: false,
      message: "Failed to add Attendance",
      error,
    });
  }
};

