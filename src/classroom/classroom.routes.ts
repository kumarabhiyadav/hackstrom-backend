import express, { Router } from "express";
import { verifyJwtToken } from "../utils/middleware/JWT";
import { createClassroom, deleteClassroom, fetchClassroom } from "./classroom.controller";
export const ClassroomRoutes: Router = express.Router();

ClassroomRoutes.post("/createclassroom", verifyJwtToken, createClassroom)
ClassroomRoutes.post("/fetchclassroom", verifyJwtToken, fetchClassroom)
ClassroomRoutes.post("/deleteclassroom", verifyJwtToken, deleteClassroom)

