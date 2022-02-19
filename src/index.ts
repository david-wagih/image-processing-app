import express from "express";
import sharp from "sharp";
import fs from "fs";
import routes from "./routes/index";
const app = express();

const port = 3000;

app.use("/api", routes);

app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});

// we will use fs to read the image from the file system
const readImage = (filename: string) => {
  return fs.readFileSync(`./assets/full/${filename}.jpg`, { flag: "r" });
};

// here we will use sharp to resize the image
const ImageTansform = async (
  filename: string,
  width: number,
  height: number
) => {
  const Image = await sharp(`./assets/full/${filename}.jpg`);
  const resizedImage = await Image.resize(width, height);
  return resizedImage.toBuffer();
};

export default ImageTansform;
