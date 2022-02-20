import express from "express";
import fs from "fs";
import path from "path";

// todo :  we can make middleware to check validitiy of the parameters
// todo : we need to take into consideration all the test cases
// todo : what is remaining is to check for the types of params

export const paramMiddleware = (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  const filename = req.query.filename as unknown as string;
  const width = req.query.width as unknown as number;
  const height = req.query.height as unknown as number;
  try {
    fs.readFileSync(path.resolve("src", "assets", "full", `${filename}.jpg`));
    if (filename) {
      if (width && height) {
        next();
      } else {
        res.status(400).send("width and height are required");
      }
    } else {
      res.status(400).json({
        message: "Enter File Name",
      });
    }
  } catch (e) {
    res.status(404).send("Image not found");
  }
};
