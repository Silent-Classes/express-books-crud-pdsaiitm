const request = require("supertest");
const app = require("../../src/app");

describe("📖 Public Book API Tests", () => {
  beforeEach(() => {
    jest.resetModules(); // reset in-memory data
  });

  it("should return an empty array initially", async () => {
    const res = await request(app).get("/books");
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual([]);
  });

  it("should add a book successfully", async () => {
    const res = await request(app)
      .post("/books")
      .send({ title: "The Hobbit", author: "J.R.R. Tolkien" });

    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty("id");
    expect(res.body.title).toBe("The Hobbit");
  });

  it("should return all added books", async () => {
    await request(app)
      .post("/books")
      .send({ title: "1984", author: "George Orwell" });

    const res = await request(app).get("/books");
    expect(res.body.length).toBe(2);
    expect(res.body[1].title).toBe("1984");
  });
});
