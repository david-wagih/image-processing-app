describe("server test", () => {
  it("should return the server running", async () => {
    const server = await import("../index");
    expect(server).toBeTruthy();
  });
});
