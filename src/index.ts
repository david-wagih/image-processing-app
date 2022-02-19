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
  return fs.readFileSync(`./assets/full/${filename}.jpg`);
};

// here we will use sharp to resize the image
const ImageTansform = (filename: string, width: number, height: number) => {
  sharp(readImage(filename))
    .resize(width, height)
    .toBuffer()
    .then((data) => {
      fs.writeFileSync(`./assets/thumb/${filename}_thumb.jpg`, data);
    });
};

export default ImageTansform;
