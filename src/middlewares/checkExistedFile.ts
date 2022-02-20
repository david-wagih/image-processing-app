import path from "path";
import fs from "fs";
import sizeOf from "image-size";

export const checkExistedFile = (
  filename: string,
  width: number,
  height: number
): boolean | undefined => {
  const fullPath = path.resolve("src", "assets", "thumb", `${filename}.jpg`);
  try {
    const Image = fs.readFileSync(fullPath); // the error is from here
    if (Image) {
      const dimensions = sizeOf(Image);
      if (
        Image &&
        dimensions.width === Number(width) &&
        dimensions.height === Number(height)
      ) {
        return true;
      }
    } else {
      return false;
    }
  } catch (error) {
    return false;
  }
};
