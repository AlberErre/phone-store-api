import express from "express";
import { Phone } from "../../phone/domain/Phone";

const phoneRouter = express.Router();

phoneRouter.get("/", (req, res) => {
  const phones: Phone[] = [];
  res.json(phones);
});

export default phoneRouter;
