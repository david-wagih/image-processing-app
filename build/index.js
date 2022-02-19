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
const express_1 = __importDefault(require("express"));
const sharp_1 = __importDefault(require("sharp"));
const fs_1 = __importDefault(require("fs"));
const index_1 = __importDefault(require("./routes/index"));
const app = (0, express_1.default)();
const port = 3000;
app.use("/api", index_1.default);
app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
});
// we will use fs to read the image from the file system
const readImage = (filename) => {
    return fs_1.default.readFileSync(`./assets/full/${filename}.jpg`, { flag: "r" });
};
// here we will use sharp to resize the image
const ImageTansform = (filename, width, height) => __awaiter(void 0, void 0, void 0, function* () {
    const Image = yield (0, sharp_1.default)(`./assets/full/${filename}.jpg`);
    const resizedImage = yield Image.resize(width, height);
    return resizedImage.toBuffer();
});
exports.default = ImageTansform;
