"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkExistedFile = void 0;
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const image_size_1 = __importDefault(require("image-size"));
const checkExistedFile = (filename, width, height) => {
    const fullPath = path_1.default.resolve("src", "assets", "thumb", `${filename}.jpg`);
    try {
        const Image = fs_1.default.readFileSync(fullPath); // the error is from here
        if (Image) {
            const dimensions = (0, image_size_1.default)(Image);
            if (Image &&
                dimensions.width === Number(width) &&
                dimensions.height === Number(height)) {
                return true;
            }
        }
        else {
            return false;
        }
    }
    catch (error) {
        return false;
    }
};
exports.checkExistedFile = checkExistedFile;
