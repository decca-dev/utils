"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var get_image_colors_1 = __importDefault(require("get-image-colors"));
var router = (0, express_1.Router)();
router.post("/getcolors", function (req, res) {
    var image = req.body.image;
    if (!image)
        return res.status(400).json({ success: false, error: "Missing image" });
    var Colors = [];
    (0, get_image_colors_1.default)(image).then(function (colors) {
        colors.map(function (color) {
            Colors.push(color.hex());
        });
        res.status(200).json({ success: true, data: Colors });
    });
});
exports.default = router;
