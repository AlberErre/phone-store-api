import express from "express";

const app = express();

app.get("/", function (req, res) {
  res.json({ message: "hello!" });
});

export default app;
