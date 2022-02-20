import path from "path";
import ImageTransform from "../utilities";
import { checkExistedFile } from "../middlewares/checkExistedFile";

describe("ImageTransform function", () => {
  it("should return the path of the image", async () => {
    const imagePath = await ImageTransform("santamonica", 100, 100);
    expect(imagePath).toBe(
      path.join(__dirname, "assets", "thumb", "santamonica_100_100.jpg")
    );
  });
});

describe("CheckExistedFile test", () => {
  it("should return false", async () => {
    const result = checkExistedFile("santamonica", 100, 100);
    expect(result).toBe(false);
  });
});
