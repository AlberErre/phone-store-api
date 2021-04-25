import express from "express";
import getPhones from "../../phone/application/getPhones";

const phoneRouter = express.Router();

phoneRouter.get("/", async (req, res) => {
  const phones = await getPhones();
  res.json(phones);
});

export default phoneRouter;
