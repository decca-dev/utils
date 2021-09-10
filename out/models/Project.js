"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var Project = (0, mongoose_1.model)("Project", new mongoose_1.Schema({
    name: {
        type: String,
    },
    description: {
        type: String,
    },
    type: {
        type: String,
    },
    image: {
        type: String,
    },
    url: {
        type: String,
    },
    githubURL: {
        type: String,
    },
}));
exports.default = Project;
