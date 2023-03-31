"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShopRoutes = void 0;
const express_1 = __importDefault(require("express"));
const JWT_1 = require("../utils/middleware/JWT");
const shop_controller_1 = require("./shop.controller");
exports.ShopRoutes = express_1.default.Router();
exports.ShopRoutes.post("/createNewShopProduct", JWT_1.verifyJwtToken, shop_controller_1.createNewShopProduct);
exports.ShopRoutes.post("/fetchShopProducts", JWT_1.verifyJwtToken, shop_controller_1.fetchShopProducts);
exports.ShopRoutes.post("/purchaseShopProduct", JWT_1.verifyJwtToken, shop_controller_1.purchaseShopProduct);
