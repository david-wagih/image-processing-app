// this one to test the Api endpoint
import request from "supertest";
import app from "../index";

describe("GET /images", () => {
  it("should return a 200 response", async () => {
    const response = await request(app).get("/api/images").query({
      filename: "santamonica",
      width: 200,
      height: 200,
    });
    expect(response.status).toBe(200);
  });
});
