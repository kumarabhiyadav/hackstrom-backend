import express, { Router } from "express";
import { verifyJwtToken } from "../utils/middleware/JWT";
import { deleteUser, fetchUsers, login, signup, updateUser, upload } from "./auth.controllers";
export const AuthRoutes: Router = express.Router();


// /api/auth/ 

AuthRoutes.post("/login", login);
AuthRoutes.post("/signup", signup);
AuthRoutes.post("/upload", upload);
AuthRoutes.post("/fetchUsers", verifyJwtToken, fetchUsers);
AuthRoutes.post("/updateUser", verifyJwtToken, updateUser);
AuthRoutes.post("/deleteUser", verifyJwtToken, deleteUser);



