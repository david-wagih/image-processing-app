"use strict";
// todo : we want to test the imageTransform function
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
const path_1 = __importDefault(require("path"));
const index_1 = __importDefault(require("../index"));
describe("ImageTransform function test", () => {
    it("should return the path of the image", () => __awaiter(void 0, void 0, void 0, function* () {
        const imagePath = yield (0, index_1.default)("santamonica", 100, 100);
        expect(imagePath).toBe(path_1.default.resolve("src", "assets", "thumb", "santamonica_100_100.jpg"));
    }));
});
