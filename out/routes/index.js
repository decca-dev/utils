"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Email_1 = __importDefault(require("./Email"));
var Colors_1 = __importDefault(require("./Colors"));
var Database_1 = __importDefault(require("./Database"));
var express_1 = require("express");
var Middleware_1 = require("../utils/Middleware");
var router = (0, express_1.Router)();
router.get("/", function (req, res) {
    res.status(200).send("hello");
});
router.use("/email", Middleware_1.validate, Email_1.default);
router.use("/colors", Colors_1.default);
router.use("/db", Middleware_1.validate, Database_1.default);
exports.default = router;
