import express from "express";

const PORT = 3000;

(async () => {
  const app = express();

  app.get("/", function (req, res) {
    res.send("Hello!");
  });

  app.listen(PORT, () => {
    console.log(`Phone-store-api listening on port ${PORT}.`);
  });
})();
