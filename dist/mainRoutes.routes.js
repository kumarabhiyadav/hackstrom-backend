"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_routes_1 = require("./auth/auth.routes");
const comment_routes_1 = require("./comments/comment.routes");
const like_routes_1 = require("./likes/like.routes");
const post_routes_1 = require("./posts/post.routes");
const shop_routes_1 = require("./shop/shop.routes");
const app = (0, express_1.default)();
app.use("/auth", auth_routes_1.AuthRoutes);
app.use("/post", post_routes_1.PostRoutes);
app.use("/shop", shop_routes_1.ShopRoutes);
app.use("/comment", comment_routes_1.CommentRoutes);
app.use("/like", like_routes_1.LikeRouter);
module.exports = app;
