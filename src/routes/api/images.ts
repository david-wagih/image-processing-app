import express from "express";
import ImageTansform from "../..";
import { checkExistedFile } from "../../middlewares/checkExistedFile";
import { paramMiddleware } from "../../middlewares/paramMiddleware";
import path from "path";

const images = express.Router();

images.get(
  "/",
  (req: express.Request, res: express.Response, next: express.NextFunction) => {
    const filename = req.query.filename as unknown as string;
    const width = req.query.width as unknown as number;
    const height = req.query.height as unknown as number;

    if (checkExistedFile(req, res, next)) {
      res.sendFile(path.resolve("src", "assets", "thumb", `${filename}.jpg`));
    } else {
      res.send(ImageTansform(filename, width, height));
    }
  }
);

images.use(paramMiddleware);
images.use(checkExistedFile);

export default images;
