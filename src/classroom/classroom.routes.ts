import express, { Router } from "express";
import { verifyJwtToken } from "../utils/middleware/JWT";
import { createClassroom, deleteClassroom, fetchClassroom } from "./classroom.controllers";
export const ClassroomRoutes: Router = express.Router();

ClassroomRoutes.post("/createclassroom", verifyJwtToken, createClassroom)
ClassroomRoutes.post("/fetchclassroom", verifyJwtToken, createClassroom)
ClassroomRoutes.post("/deleteclassroom", verifyJwtToken, createClassroom)

