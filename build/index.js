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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sharp_1 = __importDefault(require("sharp"));
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const checkExistedFile_1 = require("./middlewares/checkExistedFile");
// here we will use sharp to resize the image
const ImageTansform = (filename, width, height) => __awaiter(void 0, void 0, void 0, function* () {
    if ((0, checkExistedFile_1.checkExistedFile)(filename, width, height)) {
        const imgPath = path_1.default.resolve("src", "assets", "thumb", `${filename}_${width}_${height}.jpg`);
        return imgPath;
    }
    else {
        const fullPath = path_1.default.resolve("src", "assets", "full", `${filename}.jpg`);
        const thumbPath = path_1.default.resolve("src", "assets", "thumb", `${filename}_${width}_${height}.jpg`);
        const Image = yield (0, sharp_1.default)(fullPath)
            .resize(Number(width), Number(height))
            .jpeg()
            .toBuffer();
        fs_1.default.writeFileSync(path_1.default.resolve(thumbPath), Image);
        return thumbPath;
    }
});
exports.default = ImageTansform;
