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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var Project_1 = __importDefault(require("../models/Project"));
var Middleware_1 = require("../utils/Middleware");
var validQueries = ["Project"];
var router = (0, express_1.Router)();
router.get("/:query", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var query, _a, type, validTypes, _b, _c, _d, _e;
    var _f, _g;
    return __generator(this, function (_h) {
        switch (_h.label) {
            case 0:
                query = req.params.query;
                if (!query)
                    return [2 /*return*/, res
                            .status(400)
                            .json({ success: false, error: "Missing query param" })];
                if (!validQueries.includes(query.charAt(0).toUpperCase().concat(query.slice(1))))
                    return [2 /*return*/, res
                            .status(400)
                            .json({ success: false, error: "Invalid query param" })];
                _a = query.charAt(0).toUpperCase().concat(query.slice(1));
                switch (_a) {
                    case validQueries[0]: return [3 /*break*/, 1];
                }
                return [3 /*break*/, 6];
            case 1:
                type = req.query.type;
                validTypes = ["Project", "Contribution"];
                if (!(!type || !validTypes.includes(type))) return [3 /*break*/, 3];
                _c = (_b = res.status(200)).json;
                _f = { success: true };
                return [4 /*yield*/, Project_1.default.find()];
            case 2:
                _c.apply(_b, [(_f.data = _h.sent(), _f)]);
                return [3 /*break*/, 5];
            case 3:
                _e = (_d = res
                    .status(200))
                    .json;
                _g = { success: true };
                return [4 /*yield*/, Project_1.default.find({ type: type })];
            case 4:
                _e.apply(_d, [(_g.data = _h.sent(), _g)]);
                _h.label = 5;
            case 5: return [3 /*break*/, 7];
            case 6:
                res.status(400).json({ success: false });
                return [3 /*break*/, 7];
            case 7: return [2 /*return*/];
        }
    });
}); });
router.post("/:query", Middleware_1.validate, function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var query, _a, _b, name_1, description, type, image, url, githubURL, project, error_1;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                query = req.params.query;
                if (!query)
                    return [2 /*return*/, res
                            .status(400)
                            .json({ success: false, error: "Missing query param" })];
                if (!validQueries.includes(query.charAt(0).toUpperCase().concat(query.slice(1))))
                    return [2 /*return*/, res
                            .status(400)
                            .json({ success: false, error: "Invalid query param" })];
                _a = query.charAt(0).toUpperCase().concat(query.slice(1));
                switch (_a) {
                    case validQueries[0]: return [3 /*break*/, 1];
                }
                return [3 /*break*/, 5];
            case 1:
                _c.trys.push([1, 3, , 4]);
                _b = req.body, name_1 = _b.name, description = _b.description, type = _b.type, image = _b.image, url = _b.url, githubURL = _b.githubURL;
                project = new Project_1.default({
                    name: name_1,
                    description: description,
                    type: type,
                    image: image,
                    url: url ? url : "None",
                    githubURL: githubURL,
                });
                return [4 /*yield*/, project.save()];
            case 2:
                _c.sent();
                res.status(200).json({ success: true, data: project });
                return [3 /*break*/, 4];
            case 3:
                error_1 = _c.sent();
                res.status(400).json({ success: false, error: error_1.message });
                return [3 /*break*/, 4];
            case 4: return [3 /*break*/, 6];
            case 5:
                res.status(400).json({ success: false });
                return [3 /*break*/, 6];
            case 6: return [2 /*return*/];
        }
    });
}); });
router.delete("/:query", Middleware_1.validate, function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var query, _a, name_2, project, error_2;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                query = req.params.query;
                if (!query)
                    return [2 /*return*/, res
                            .status(400)
                            .json({ success: false, error: "Missing query param" })];
                if (!validQueries.includes(query.charAt(0).toUpperCase().concat(query.slice(1))))
                    return [2 /*return*/, res
                            .status(400)
                            .json({ success: false, error: "Invalid query param" })];
                _a = query.charAt(0).toUpperCase().concat(query.slice(1));
                switch (_a) {
                    case validQueries[0]: return [3 /*break*/, 1];
                }
                return [3 /*break*/, 5];
            case 1:
                _b.trys.push([1, 3, , 4]);
                name_2 = req.body.name;
                return [4 /*yield*/, Project_1.default.findOneAndDelete({ name: name_2 })];
            case 2:
                project = _b.sent();
                if (!project) {
                    res.status(400).json({ success: false, error: "Project not found" });
                }
                res.status(200).json({ success: true });
                return [3 /*break*/, 4];
            case 3:
                error_2 = _b.sent();
                res.status(400).json({ success: false, error: error_2.message });
                return [3 /*break*/, 4];
            case 4: return [3 /*break*/, 6];
            case 5:
                res.status(400).json({ success: false });
                return [3 /*break*/, 6];
            case 6: return [2 /*return*/];
        }
    });
}); });
router.put("/:query", Middleware_1.validate, function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var query, _a, _b, name_3, description, type, image, url, githubURL, project, error_3;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                query = req.params.query;
                if (!query)
                    return [2 /*return*/, res
                            .status(400)
                            .json({ success: false, error: "Missing query param" })];
                if (!validQueries.includes(query.charAt(0).toUpperCase().concat(query.slice(1))))
                    return [2 /*return*/, res
                            .status(400)
                            .json({ success: false, error: "Invalid query param" })];
                _a = query.charAt(0).toUpperCase().concat(query.slice(1));
                switch (_a) {
                    case validQueries[0]: return [3 /*break*/, 1];
                }
                return [3 /*break*/, 6];
            case 1:
                _c.trys.push([1, 4, , 5]);
                _b = req.body, name_3 = _b.name, description = _b.description, type = _b.type, image = _b.image, url = _b.url, githubURL = _b.githubURL;
                return [4 /*yield*/, Project_1.default.findOne({ name: name_3 })];
            case 2:
                project = _c.sent();
                if (!project) {
                    res.status(400).json({ success: false, error: "Project not found" });
                }
                if (name_3)
                    project.name = name_3;
                if (description)
                    project.description = description;
                if (type)
                    project.type = type;
                if (image)
                    project.image = image;
                if (url)
                    project.url = url;
                if (githubURL)
                    project.githubURL = githubURL;
                return [4 /*yield*/, project.save()];
            case 3:
                _c.sent();
                res.status(200).json({ success: true, data: project });
                return [3 /*break*/, 5];
            case 4:
                error_3 = _c.sent();
                res.status(400).json({ success: false, error: error_3.message });
                return [3 /*break*/, 5];
            case 5: return [3 /*break*/, 7];
            case 6:
                res.status(400).json({ success: false });
                return [3 /*break*/, 7];
            case 7: return [2 /*return*/];
        }
    });
}); });
exports.default = router;
