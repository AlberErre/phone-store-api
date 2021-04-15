import express from "express";
import cors from "cors";
import phoneRouter from "./api/phone";

const app = express();

app.use(cors());

app.get("/", function (req, res) {
  res.json({ message: "hello!" });
});

app.use("/phones", phoneRouter);

export default app;
