import express from "express";
import ImageTansform from "../..";
import { checkExistedFile } from "../../middlewares/checkExistedFile";
import { paramMiddleware } from "../../middlewares/paramMiddleware";

const images = express.Router();

images.get("/", (req: express.Request, res: express.Response) => {
  const filename = req.query.filename as unknown as string;
  const width = req.query.width as unknown as number;
  const height = req.query.height as unknown as number;

  res.send(ImageTansform(filename, width, height));
});

images.use(paramMiddleware);
images.use(checkExistedFile);

export default images;
