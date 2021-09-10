"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var dotenv_1 = require("dotenv");
var mongoose_1 = require("mongoose");
var Logger_1 = __importDefault(require("./utils/Logger"));
var index_1 = __importDefault(require("./routes/index"));
(0, dotenv_1.config)();
var app = (0, express_1.default)();
var PORT = 8080;
(0, mongoose_1.connect)("" + process.env.MONGO_URI)
    .then(function () {
    Logger_1.default.info("Connected to mongoose successfully!", "DATABASE");
})
    .catch(function (err) {
    Logger_1.default.error("" + err.message, "DATABASE");
});
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use("/api", index_1.default);
app.listen(PORT, function () { return Logger_1.default.info("Started on port " + PORT, "server"); });
