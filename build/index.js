"use strict";
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
    return fs_1.default.readFileSync(`./assets/full/${filename}.jpg`);
};
// here we will use sharp to resize the image
const ImageTansform = (filename, width, height) => {
    (0, sharp_1.default)(readImage(filename))
        .resize(width, height)
        .toFormat("jpeg")
        .toBuffer()
        .then((data) => {
        fs_1.default.writeFileSync(`./assets/thumb/${filename}.jpg`, data);
    });
};
exports.default = ImageTansform;
