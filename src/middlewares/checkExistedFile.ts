import express from "express";
import path from "path";
import fs from "fs";

export const checkExistedFile = (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  const filename = req.query.filename as unknown as string;
  const width = req.query.width as unknown as number;
  const height = req.query.height as unknown as number;

  const filepath = path.join(__dirname, "../../../public/images", filename);

  fs.exists(filepath, (exists) => {
    if (!exists) {
      res.status(404).send("File not found");
    } else {
      next();
    }
  });
};
