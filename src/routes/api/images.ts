import express from "express";
import ImageTansform from "../..";

const images = express.Router();

// we want to take parameters from the url like filename and width and height we will use
images.get("/:filename/:width/:height", (req, res) => {
  const filename = req.params.filename as unknown as string;
  const width = req.params.width as unknown as number;
  const height = req.params.height as unknown as number;

  res.send(ImageTansform(filename, width, height));
});

export default images;
