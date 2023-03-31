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
Object.defineProperty(exports, "__esModule", { value: true });
exports.unlikePost = exports.likePost = void 0;
const Post_model_1 = require("../posts/Post.model");
const like_model_1 = require("./like.model");
const likePost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let { user, post } = req.body;
    try {
        let like = yield like_model_1.LikeModel.create({
            user,
            post,
        });
        if (like) {
            yield Post_model_1.PostModel.findOneAndUpdate({ _id: post }, {
                $inc: { likeCounts: 1 },
            });
            res.status(201).json({
                success: true,
                message: "Liked Post",
                result: like,
            });
        }
        else {
            res.status(201).json({
                success: false,
                message: "Like Post",
                result: null,
            });
        }
    }
    catch (error) {
        res.status(401).json({
            success: false,
            message: "failed to like post",
            error,
        });
    }
});
exports.likePost = likePost;
const unlikePost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let { user, post } = req.body;
    try {
        let unliked = yield like_model_1.LikeModel.findOneAndDelete({
            user,
            post,
        }, {
            new: true,
            runValidators: true,
        });
        if (unliked) {
            yield Post_model_1.PostModel.findOneAndUpdate({ _id: post }, {
                $inc: { likeCounts: -1 },
            });
            res.status(201).json({
                success: true,
                message: "unliked",
                result: unliked,
            });
        }
        else {
            res.status(201).json({
                success: false,
                message: "Failed to unliked",
                result: null,
            });
        }
    }
    catch (error) {
        res.status(401).json({
            success: false,
            message: "Failed to unlike",
            error,
        });
    }
});
exports.unlikePost = unlikePost;
