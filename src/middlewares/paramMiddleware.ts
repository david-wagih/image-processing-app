import express from "express";

// todo :  we can make middleware to check validitiy of the parameters

export const paramMiddleware = (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  const { filename, width, height } = req.params;
  if (filename && width && height) {
    next();
  } else {
    res.status(400).json({
      error: "width and height are required",
    });
  }
};
