"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var nodemailer = __importStar(require("nodemailer"));
var Logger_1 = __importDefault(require("../utils/Logger"));
var EMAIL = process.env.N_EMAIL;
var PASSWORD = process.env.N_PASSWORD;
var DECCA = process.env.MY_EMAIL;
var router = (0, express_1.Router)();
router.post("/send", function (req, res) {
    var _a = req.body, from = _a.from, subject = _a.subject, message = _a.message;
    var transporter = nodemailer.createTransport({
        service: "gmail",
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            user: EMAIL,
            pass: PASSWORD,
        },
    });
    var mailOptions = {
        from: from,
        to: DECCA,
        subject: subject ? subject : "A subject",
        html: message,
    };
    transporter.sendMail(mailOptions, function (err, info) {
        if (err) {
            Logger_1.default.error(err.message, "email server");
            res.status(400).json({ success: false, error: err.message });
        }
        else {
            Logger_1.default.info("Sent successfully", "email server");
            res.status(200).json({ success: true, message: "sent successfully" });
        }
    });
});
exports.default = router;
