"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validate = void 0;
var validate = function (req, res, next) {
    var auth = req.headers.auth;
    if (!auth) {
        return res
            .status(401)
            .json({ success: false, error: "Missing auth header" });
    }
    else if (auth !== process.env.KEY) {
        return res
            .status(403)
            .json({ success: false, error: "Invalid auth header" });
    }
    else {
        next();
    }
};
exports.validate = validate;
