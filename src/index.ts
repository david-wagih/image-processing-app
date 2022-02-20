import sharp from "sharp";
import path from "path";
import fs from "fs";
import { checkExistedFile } from "./middlewares/checkExistedFile";
import { paramMiddleware } from "./middlewares/paramMiddleware";

// here we will use sharp to resize the image
const ImageTansform = async (
  filename: string,
  width: number,
  height: number
): Promise<string> => {
  if (checkExistedFile(filename, width, height)) {
    const imgPath = path.resolve(
      "src",
      "assets",
      "thumb",
      `${filename}_${width}_${height}.jpg`
    );
    return imgPath;
  } else {
    const fullPath = path.resolve("src", "assets", "full", `${filename}.jpg`);
    const thumbPath = path.resolve(
      "src",
      "assets",
      "thumb",
      `${filename}_${width}_${height}.jpg`
    );
    const Image = await sharp(fullPath)
      .resize(Number(width), Number(height))
      .jpeg()
      .toBuffer();
    fs.writeFileSync(path.resolve(thumbPath), Image);
    return thumbPath;
  }
};

export default ImageTansform;
