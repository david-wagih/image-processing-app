import express from "express";
import path from "path";
import fs from "fs";
import sizeOf from "image-size";

export const checkExistedFile = (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  const filename = req.query.filename as unknown as string;
  const width = req.query.width as unknown as number;
  const height = req.query.height as unknown as number;
  const fullPath = path.resolve("src", "assets", "thumb", `${filename}.jpg`);
  const Image = fs.readFileSync(fullPath);
  const dimensions = sizeOf(Image);
  if (Image && dimensions.width === width && dimensions.height === height) {
    return true;
  } else {
    next();
    return false;
  }
};
