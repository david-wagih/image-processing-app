// todo : we want to test the imageTransform function

import path from "path";
import ImageTransform from "../index";

describe("ImageTransform function test", () => {
  it("should return the path of the image", async () => {
    const imagePath = await ImageTransform("santamonica", 100, 100);
    expect(imagePath).toBe(
      path.resolve("src", "assets", "thumb", "santamonica_100_100.jpg")
    );
  });
});
