import express from "express";
import fs from "fs";
import path from "path";

export const paramMiddleware = (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
): void => {
  const filename = req.query.filename as string;
  const width = Number(req.query.width as unknown as number);
  const height = Number(req.query.height as unknown as number);

  try {
    typeof filename == "string" &&
      typeof width == "number" &&
      typeof height == "number";

    try {
      fs.readFileSync(path.resolve("assets", "full", `${filename}.jpg`));
      if (filename && width && height) {
        next();
      } else {
        res.status(400).send("width and height are required as numbers");
      }
    } catch (e) {
      res.status(400).json({
        error: "Invalid filename",
      });
    }
  } catch (e) {
    res
      .status(404)
      .send(
        "File Name should be string and width and height should be numeric"
      );
  }
};
