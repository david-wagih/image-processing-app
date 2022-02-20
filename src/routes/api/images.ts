import express from "express";
import ImageTansform from "../../utilities";
import { paramMiddleware } from "../../middlewares/paramMiddleware";

const images = express.Router();

images.get(
  "/",
  paramMiddleware,
  async (req: express.Request, res: express.Response) => {
    const filename = req.query.filename as unknown as string;
    const width = req.query.width as unknown as number;
    const height = req.query.height as unknown as number;

    res.sendFile(await ImageTansform(filename, width, height));
  }
);
images.use(paramMiddleware);
export default images;
