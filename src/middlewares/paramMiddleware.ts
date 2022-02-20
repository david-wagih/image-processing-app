import express from "express";

// todo :  we can make middleware to check validitiy of the parameters

export const paramMiddleware = (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  const filename = req.query.filename as unknown as string;
  const width = req.query.width as unknown as number;
  const height = req.query.height as unknown as number;
  if (filename && width && height) {
    if (filename as string) {
      if ((width as unknown as number) && (height as unknown as number)) {
        next();
      } else {
        res.status(400).send("Width and Height should be positive numbers");
      }
    } else {
      res.status(400).send("invalid fileName");
    }
  } else {
    res.status(400).json({
      error: "width and height are required",
    });
  }
};
