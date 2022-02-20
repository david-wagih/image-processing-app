import express from "express";
import sharp from "sharp";
import routes from "./routes/index";
import path from "path";
import fs from "fs";

const app = express();

const port = 3000;

app.use("/api", routes);

app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});

// here we will use sharp to resize the image
const ImageTansform = async (
  filename: string,
  width: number,
  height: number
) => {
  const fullImagesPath = path.resolve(
    "src",
    "assets",
    "full",
    `${filename}.jpg`
  );
  const thumbImagesPath = path.resolve(
    "src",
    "assets",
    "thumb",
    `${filename}.jpg`
  );
  const Image = sharp(fullImagesPath);
  const ResizedImage = Image.resize(Number(width), Number(height));
  // todo :  this is some problem here
  fs.writeFileSync(thumbImagesPath, await ResizedImage.toBuffer());
  return thumbImagesPath;
};

export default ImageTansform;
