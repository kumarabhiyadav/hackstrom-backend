import express, { Router } from "express";
import { verifyJwtToken } from "../../utils/middleware/JWT";
import {
  fetchClassroomOfUser,
  createClassroom,
  deleteClassroom,
} from "./classroom.controller";
export const ClassroomRoutes: Router = express.Router();

ClassroomRoutes.post("/fetchClassroomOfUser", fetchClassroomOfUser);
ClassroomRoutes.post("/createClassroom", createClassroom);
ClassroomRoutes.post("/deleteClassroom", deleteClassroom);
