import { Phone } from "./phone/domain/Phone";
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

it("phones should return Phone type", async (done) => {
  const response = await request.get("/phones");
  expect(response.status).toBe(200);

  const phone: Phone = response.body[0];

  expect(phone.brand).toBeTruthy();
  expect(phone.name).toBeTruthy();
  expect(phone.description).toBeTruthy();
  expect(phone.image).toBeTruthy();
  expect(phone.price).toBeTruthy();
  expect(phone.color).toBeTruthy();
  expect(phone.colorDescription).toBeTruthy();

  done();
});

it("Should return 404 ", async (done) => {
  const response = await request.get("/something");

  expect(response.status).toBe(404);

  done();
});
