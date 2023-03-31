import bcrypt from "bcrypt";
import { UserModel } from "./User.model";
import { Request, Response } from "express";
import { createAccessToken } from "../utils/middleware/JWT";
import { uploadFile } from "../utils/Helpers/fileUpload";

export const login = async (req: any, res: Response) => {
  let { email, password } = req.body;

  const user = await UserModel.findOne({ email: email });
  if (user) {
    if (bcrypt.compareSync(password, user.password)) {
      let token = await createAccessToken(user.id, user.role);

      res
        .status(201)
        .json({ success: true, result: user, token, message: "Logged in" });
    } else {
      res
        .status(201)
        .json({ success: false, message: "Invalid email or password" });
    }
  } else {
    res.status(401).json({ success: false, message: "User Not Exists" });
  }
};

export const signup = async (req: Request, res: Response) => {
  const { email, password, phone, countryCode, role, userName } = req.body;

  let user = await UserModel.findOne({ email: email, phone: phone });

  if (user) {
    res.status(401).json({
      success: false,
      message: "User Already Exists with this email and password",
    });
  } else {
    const encpass = bcrypt.hashSync(password, 1);

    user = await UserModel.create({
      userName,
      email,
      password: encpass,
      countryCode,
      phone,

      role,
    });

    if (user) {
      res.status(201).json({
        success: true,
        message: "User has been created",
        result: user,
      });
    } else {
      res.status(401).json({
        success: false,
        message: "unable to create user",
      });
    }
  }
};

export const upload = async (req: any, res: Response) => {
  for (const file of Object.values(req.files)) {
    uploadFile(file);
  }
};

export const fetchUsers = async (req: any, res: Response) => {
  let users = await UserModel.find(
    {
      isActive: true,
      isDeleted: false,
    },
    { email: 1, userName: 1, role: 1 }
  );

  if (users) {
    res.status(201).json({
      success: true,
      message: "User has been created",
      result: users,
    });
  } else {
    res.status(401).json({
      success: false,
      message: "unable to create user",
    });
  }
};

export const updateUser = async (req: any, res: Response) => {
  let { userId, email, username, role } = req.body;
  let user = await UserModel.findByIdAndUpdate(
    userId,
    {
      email: email,
      userName: username,
      role: role,
    },
    { new: true, runValidators: true }
  );

  if (user) {
    res.status(201).json({
      success: true,
      message: "User has been update",
      result: user,
    });
  } else {
    res.status(401).json({
      success: false,
      message: "unable to update user",
    });
  }
};

export const deleteUser = async (req: any, res: Response) => {
  let { userId } = req.body;
  let user = await UserModel.findByIdAndUpdate(userId, {
    isDeleted: true,
    isActive: false,
  });

  if (user) {
    res.status(201).json({
      success: true,
      message: "User has been deleted",
      result: user,
    });
  } else {
    res.status(401).json({
      success: false,
      message: "unable to delete user",
    });
  }
};
