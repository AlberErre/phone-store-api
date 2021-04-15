import app from "./server";
import supertest from "supertest";

const request = supertest(app);

it("should say hello", async (done) => {
  const response = await request.get("/");

  expect(response.status).toBe(200);
  expect(response.body.message).toBe("hello!");
  done();
});