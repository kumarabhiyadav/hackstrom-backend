"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthRoutes = void 0;
const express_1 = __importDefault(require("express"));
const JWT_1 = require("../utils/middleware/JWT");
const auth_controllers_1 = require("./auth.controllers");
exports.AuthRoutes = express_1.default.Router();
exports.AuthRoutes.post("/login", auth_controllers_1.login);
exports.AuthRoutes.post("/signup", auth_controllers_1.signup);
exports.AuthRoutes.post("/upload", auth_controllers_1.upload);
exports.AuthRoutes.post("/fetchUsers", JWT_1.verifyJwtToken, auth_controllers_1.fetchUsers);
exports.AuthRoutes.post("/updateUser", JWT_1.verifyJwtToken, auth_controllers_1.updateUser);
exports.AuthRoutes.post("/deleteUser", JWT_1.verifyJwtToken, auth_controllers_1.deleteUser);
