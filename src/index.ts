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
  await sharp("./assets/full/" + filename + ".jpg")
    .resize(Number(width), Number(height))
    .toFile(`./assets/thumb/${filename}.jpg`);
};

export default ImageTansform;
