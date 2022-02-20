// want to test the running server

describe("server test", () => {
  it("should return the server running", async () => {
    const server = await import("../server");
    expect(server).toBeTruthy();
  });
});
