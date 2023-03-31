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
exports.purchaseShopProduct = exports.fetchShopProducts = exports.createNewShopProduct = void 0;
const fileUpload_1 = require("../utils/Helpers/fileUpload");
const orders_model_1 = require("./orders.model");
const shop_model_1 = require("./shop.model");
const createNewShopProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let productImage;
    let { productName, productDesc, userPoints } = req.body;
    try {
        for (const file of Object.values(req.files)) {
            productImage = yield (0, fileUpload_1.uploadFile)(file);
        }
        let shopItem = yield shop_model_1.ShopModel.create({
            productDesc,
            productImage,
            productName,
            userPoints,
        });
        if (shopItem) {
            res.status(201).json({
                success: true,
                message: "Shop Product Added Successfully",
                result: shopItem,
            });
        }
        else {
            res.status(201).json({
                success: false,
                message: "Failed to add shop Project",
                result: shopItem,
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
exports.createNewShopProduct = createNewShopProduct;
const fetchShopProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let products = yield shop_model_1.ShopModel.find({
        isActive: true,
        isDeleted: false,
    });
    if (products) {
        res.status(201).json({
            success: true,
            message: "fetched Products",
            result: products,
        });
    }
    else {
        res.status(401).json({
            success: false,
            message: "unable to fetch products",
        });
    }
});
exports.fetchShopProducts = fetchShopProducts;
const purchaseShopProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let { user, productId } = req.body;
    let order = orders_model_1.OrderModel.create({
        user,
        product: productId,
    });
    if (order) {
        res.status(201).json({
            success: true,
            message: "fetched Order",
            result: order,
        });
    }
    else {
        res.status(401).json({
            success: false,
            message: "unable to fetch Order",
        });
    }
});
exports.purchaseShopProduct = purchaseShopProduct;
