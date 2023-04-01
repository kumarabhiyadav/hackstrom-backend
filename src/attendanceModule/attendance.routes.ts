import express, { Router } from "express";
import { logAttendance } from "./attendance.controller";
export const AttendanceRoutes: Router = express.Router();

AttendanceRoutes.post("/logAttendance", logAttendance);