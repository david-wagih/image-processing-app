import path from "path";
import ImageTransform from "../index";
import { checkExistedFile } from "../middlewares/checkExistedFile";

describe("ImageTransform function running good", () => {
  it("should return the path of the image", async () => {
    const imagePath = await ImageTransform("santamonica", 100, 100);
    expect(imagePath).toBe(
      path.resolve("src", "assets", "thumb", "santamonica_100_100.jpg")
    );
  });
});

describe("CheckExistedFile test", () => {
  it("should return false", async () => {
    const result = checkExistedFile("santamonica", 100, 100);
    expect(result).toBe(false);
  });
});
