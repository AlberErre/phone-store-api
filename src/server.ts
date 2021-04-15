import express from "express";
import phoneRouter from "./api/phone";

const app = express();

app.get("/", function (req, res) {
  res.json({ message: "hello!" });
});

app.use("/phones", phoneRouter);

export default app;
