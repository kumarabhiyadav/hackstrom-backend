"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentRoutes = void 0;
const express_1 = __importDefault(require("express"));
const JWT_1 = require("../utils/middleware/JWT");
const comment_controllers_1 = require("./comment.controllers");
exports.CommentRoutes = express_1.default.Router();
exports.CommentRoutes.post("/createComment", JWT_1.verifyJwtToken, comment_controllers_1.createComment);
exports.CommentRoutes.post("/fetchComment", JWT_1.verifyJwtToken, comment_controllers_1.fetchComment);
exports.CommentRoutes.post("/deleteComment", JWT_1.verifyJwtToken, comment_controllers_1.deleteComment);
