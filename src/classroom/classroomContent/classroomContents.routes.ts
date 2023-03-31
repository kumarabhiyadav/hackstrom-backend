import express, { Router } from "express";
import { verifyJwtToken } from "../../utils/middleware/JWT";
import {
  createClassroomContent,
  deleteRecreationClassroomContent,
} from "./classroomContent.controller";
export const RecreationMilestoneRoutes: Router = express.Router();

RecreationMilestoneRoutes.post(
  "/createClassroomContent",
  verifyJwtToken,
  createClassroomContent
);

RecreationMilestoneRoutes.post(
  "/deleteRecreationClassroomContent",
  verifyJwtToken,
  deleteRecreationClassroomContent
);
