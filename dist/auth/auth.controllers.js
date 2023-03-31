"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.updateUser = exports.fetchUsers = exports.upload = exports.signup = exports.login = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const User_model_1 = require("./User.model");
const JWT_1 = require("../utils/middleware/JWT");
const fileUpload_1 = require("../utils/Helpers/fileUpload");
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let { email, password } = req.body;
    const user = yield User_model_1.UserModel.findOne({ email: email });
    if (user) {
        if (bcrypt_1.default.compareSync(password, user.password)) {
            let token = yield (0, JWT_1.createAccessToken)(user.id, user.role);
            res
                .status(201)
                .json({ success: true, result: user, token, message: "Logged in" });
        }
        else {
            res
                .status(201)
                .json({ success: false, message: "Invalid email or password" });
        }
    }
    else {
        res.status(401).json({ success: false, message: "User Not Exists" });
    }
});
exports.login = login;
const signup = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password, phone, countryCode, role, userName } = req.body;
    let user = yield User_model_1.UserModel.findOne({ email: email, phone: phone });
    if (user) {
        res.status(401).json({
            success: false,
            message: "User Already Exists with this email and password",
        });
    }
    else {
        const encpass = bcrypt_1.default.hashSync(password, 1);
        user = yield User_model_1.UserModel.create({
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
        }
        else {
            res.status(401).json({
                success: false,
                message: "unable to create user",
            });
        }
    }
});
exports.signup = signup;
const upload = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    for (const file of Object.values(req.files)) {
        (0, fileUpload_1.uploadFile)(file);
    }
});
exports.upload = upload;
const fetchUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let users = yield User_model_1.UserModel.find({
        isActive: true,
        isDeleted: false,
    }, { email: 1, userName: 1, role: 1 });
    if (users) {
        res.status(201).json({
            success: true,
            message: "User has been created",
            result: users,
        });
    }
    else {
        res.status(401).json({
            success: false,
            message: "unable to create user",
        });
    }
});
exports.fetchUsers = fetchUsers;
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let { userId, email, username, role } = req.body;
    let user = yield User_model_1.UserModel.findByIdAndUpdate(userId, {
        email: email,
        userName: username,
        role: role,
    }, { new: true, runValidators: true });
    if (user) {
        res.status(201).json({
            success: true,
            message: "User has been update",
            result: user,
        });
    }
    else {
        res.status(401).json({
            success: false,
            message: "unable to update user",
        });
    }
});
exports.updateUser = updateUser;
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let { userId } = req.body;
    let user = yield User_model_1.UserModel.findByIdAndUpdate(userId, {
        isDeleted: true,
        isActive: false,
    });
    if (user) {
        res.status(201).json({
            success: true,
            message: "User has been deleted",
            result: user,
        });
    }
    else {
        res.status(401).json({
            success: false,
            message: "unable to delete user",
        });
    }
});
exports.deleteUser = deleteUser;
