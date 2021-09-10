"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var chalk_1 = __importDefault(require("chalk"));
var Logger = /** @class */ (function () {
    function Logger() {
    }
    Logger.getSource = function (src) {
        return src ? src.toUpperCase() : "OTHER";
    };
    Logger.toHHMMSS = function (time) {
        var hours = time.getHours().toString().padStart(2, "0");
        var minutes = time.getMinutes().toString().padStart(2, "0");
        var seconds = time.getSeconds().toString().padStart(2, "0");
        return hours + ":" + minutes + ":" + seconds;
    };
    Logger.info = function (message, src) {
        console.log("[" + this.toHHMMSS(new Date()) + "] " + chalk_1.default.green("INFO") + " [" + this.getSource(src) + "] " + message);
    };
    Logger.error = function (message, src) {
        console.log("[" + this.toHHMMSS(new Date()) + "] " + chalk_1.default.red("INFO") + " [" + this.getSource(src) + "] " + message);
    };
    Logger.warning = function (message, src) {
        console.log("[" + this.toHHMMSS(new Date()) + "] " + chalk_1.default.yellow("INFO") + " [" + this.getSource(src) + "] " + message);
    };
    return Logger;
}());
exports.default = Logger;
