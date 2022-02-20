import path from "path";
import ImageTransform from "../index";

describe("ImageTransform function running good", () => {
  it("should return the path of the image", async () => {
    const imagePath = await ImageTransform("santamonica", 100, 100);
    expect(imagePath).toBe(
      path.resolve("src", "assets", "thumb", "santamonica_100_100.jpg")
    );
  });
});

describe("server test", () => {
  it("should return the server running", async () => {
    const server = await import("../index");
    expect(server).toBeTruthy();
  });
});
