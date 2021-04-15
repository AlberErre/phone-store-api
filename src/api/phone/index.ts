import express from "express";
import { getPhonesUseCase } from "./../../phone/application";

const phoneRouter = express.Router();

phoneRouter.get("/", (req, res) => {
  const phones = getPhonesUseCase();
  res.json(phones);
});

export default phoneRouter;
