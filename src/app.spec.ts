import app from "./server";
import supertest from "supertest";

const request = supertest(app);

it("should say hello", async (done) => {
  const response = await request.get("/");

  expect(response.status).toBe(200);
  expect(response.body.message).toBe("hello!");
  done();
});

it("phones should return an array", async (done) => {
  const response = await request.get("/phones");
  const phones = response.body;

  expect(response.status).toBe(200);
  expect(Array.isArray(phones)).toBeTruthy();
  done();
});
