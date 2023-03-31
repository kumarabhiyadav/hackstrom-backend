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
exports.createNewPost = void 0;
const fileUpload_1 = require("../utils/Helpers/fileUpload");
const posts_model_1 = require("./posts.model");
const createNewPost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let { title, photo, user } = req.body;
    try {
        for (const file of Object.values(req.files)) {
            photo = yield (0, fileUpload_1.uploadFile)(file);
        }
        let post = yield posts_model_1.PostModel.create({
            title,
            photo,
            user,
        });
        let newPost = yield posts_model_1.PostModel.findById(post._id).populate("user", {
            name: 1,
        });
        if (newPost) {
            res.status(201).json({
                success: true,
                message: "Shop Product Added Successfully",
                result: newPost,
            });
        }
        else {
            res.status(201).json({
                success: false,
                message: "Failed to add shop Project",
                result: newPost,
            });
        }
    }
    catch (error) {
        res.status(401).json({
            success: false,
            message: "Failed to add shop Project",
            error,
        });
    }
});
exports.createNewPost = createNewPost;
