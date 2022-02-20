import path from "path";
import sharp from "sharp";
import { checkExistedFile } from "./middlewares/checkExistedFile";
import fs from "fs";

const ImageTansform = async (
  filename: string,
  width: number,
  height: number
): Promise<string> => {
  if (checkExistedFile(filename, width, height)) {
    const imgPath = path.join(
      __dirname,
      "assets",
      "thumb",
      `${filename}_${width}_${height}.jpg`
    );
    return imgPath;
  } else {
    const fullPath = path.join(__dirname, "assets", "full", `${filename}.jpg`);
    console.log(fullPath);
    const thumbPath = path.join(
      __dirname,
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
