"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const __1 = __importDefault(require("../.."));
const images = express_1.default.Router();
// we want to take parameters from the url like filename and width and height we will use
images.get("/:filename/:width/:height", (req, res) => {
    const filename = req.params.filename;
    const width = req.params.width;
    const height = req.params.height;
    res.send((0, __1.default)(filename, width, height));
});
exports.default = images;
