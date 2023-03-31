"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostRoutes = void 0;
const express_1 = __importDefault(require("express"));
const JWT_1 = require("../utils/middleware/JWT");
const post_controllers_1 = require("./post.controllers");
exports.PostRoutes = express_1.default.Router();
exports.PostRoutes.post("/createPost", JWT_1.verifyJwtToken, post_controllers_1.createPost);
exports.PostRoutes.post("/fetchPosts", JWT_1.verifyJwtToken, post_controllers_1.fetchPosts);
exports.PostRoutes.post("/deletePost", JWT_1.verifyJwtToken, post_controllers_1.deletePost);
