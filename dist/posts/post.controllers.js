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
exports.deletePost = exports.fetchPosts = exports.createPost = void 0;
const like_model_1 = require("../likes/like.model");
const Post_model_1 = require("./Post.model");
const createPost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let { category, content, user, title } = req.body;
    try {
        let post = yield Post_model_1.PostModel.create({
            category,
            content,
            user,
            title,
        });
        let createdPost = yield Post_model_1.PostModel.findById(post.id).populate("user", {
            userName: 1,
        });
        if (createdPost) {
            res.status(201).json({
                success: true,
                message: "Post has been added",
                result: createdPost,
            });
        }
        else {
            res.status(201).json({
                success: false,
                message: "Failed to add post",
                result: null,
            });
        }
    }
    catch (error) {
        res.status(401).json({
            success: false,
            message: "Failed to add post",
            error,
        });
    }
});
exports.createPost = createPost;
const fetchPosts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let { limit, skip, user } = req.body;
    try {
        let posts = yield Post_model_1.PostModel.find({
            isDeleted: false,
            isActive: true,
        })
            .populate("user", {
            userName: 1,
        })
            .sort({ createdAt: -1 });
        for (let i = 0; i < posts.length; i++) {
            let liked = yield like_model_1.LikeModel.findOne({
                post: posts[i].id,
                user: user,
            });
            if (liked) {
                posts[i].liked = true;
            }
            else {
                posts[i].liked = false;
            }
        }
        if (posts) {
            res.status(201).json({
                success: true,
                message: "Fetched Post",
                result: posts,
            });
        }
        else {
            res.status(201).json({
                success: false,
                message: "Failed to fetch post",
                result: null,
            });
        }
    }
    catch (error) {
        res.status(401).json({
            success: false,
            message: "Failed to fetch post",
            error,
        });
    }
});
exports.fetchPosts = fetchPosts;
const deletePost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let { post } = req.body;
    try {
        let deletedPost = yield Post_model_1.PostModel.findByIdAndUpdate(post, {
            isDeleted: true
        });
        if (deletedPost) {
            res.status(201).json({
                success: true,
                message: "deleted Post",
                result: deletedPost,
            });
        }
        else {
            res.status(201).json({
                success: false,
                message: "Failed to delete post",
                result: null,
            });
        }
    }
    catch (error) {
        res.status(401).json({
            success: false,
            message: "Failed to delete post",
            error,
        });
    }
});
exports.deletePost = deletePost;
