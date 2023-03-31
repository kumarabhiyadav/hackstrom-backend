"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LikeRouter = void 0;
const express_1 = __importDefault(require("express"));
const JWT_1 = require("../utils/middleware/JWT");
const like_controllers_1 = require("./like.controllers");
exports.LikeRouter = express_1.default.Router();
exports.LikeRouter.post("/likePost", JWT_1.verifyJwtToken, like_controllers_1.likePost);
exports.LikeRouter.post("/unlikePost", JWT_1.verifyJwtToken, like_controllers_1.unlikePost);
