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
router.use("/email", Middleware_1.validate, Email_1.default);
router.use("/colors", Middleware_1.validate, Colors_1.default);
router.use("/db", Database_1.default);
exports.default = router;
