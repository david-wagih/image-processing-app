import express from "express";
import ImageTansform from "../..";

const images = express.Router();

// we want to take parameters from the url like filename and width and height we will use
// todo : query strings
images.get("/", (req, res) => {
  const filename = req.query.filename as unknown as string;
  const width = req.query.width as unknown as number;
  const height = req.query.height as unknown as number;

  res.send(ImageTansform(filename, width, height));
});

export default images;
