"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.paramMiddleware = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const paramMiddleware = (req, res, next) => {
    const filename = req.query.filename;
    const width = Number(req.query.width);
    const height = Number(req.query.height);
    try {
        typeof filename == "string" &&
            typeof width == "number" &&
            typeof height == "number";
        try {
            fs_1.default.readFileSync(path_1.default.resolve("src", "assets", "full", `${filename}.jpg`));
            if (filename && width && height) {
                next();
            }
            else {
                res.status(400).send("width and height are required as numbers");
            }
        }
        catch (e) {
            res.status(400).json({
                error: "Invalid filename",
            });
        }
    }
    catch (e) {
        res
            .status(404)
            .send("File Name should be string and width and height should be numeric");
    }
};
exports.paramMiddleware = paramMiddleware;
