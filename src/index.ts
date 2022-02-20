import express from "express";
import sharp from "sharp";
import routes from "./routes/index";
import path from "path";
import fs from "fs";
import { checkExistedFile } from "./middlewares/checkExistedFile";

const app = express();

const port = 3000;

app.use("/api", routes);

app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});

// here we will use sharp to resize the image
// todo : the problem is that we override the file exists at that directory
const ImageTansform = async (
  filename: string,
  width: number,
  height: number
) => {
  if (checkExistedFile(filename, width, height)) {
    const imgPath = path.resolve("src", "assets", "thumb", `${filename}.jpg`);
    return imgPath;
  } else {
    const fullPath = path.resolve("src", "assets", "full", `${filename}.jpg`);
    const thumbPath = path.resolve("src", "assets", "thumb", `${filename}.jpg`);
    const Image = await sharp(fullPath)
      .resize(Number(width), Number(height))
      .jpeg()
      .toBuffer();
    fs.writeFileSync(path.resolve(thumbPath), Image);
    return thumbPath;
  }
};

export default ImageTansform;
