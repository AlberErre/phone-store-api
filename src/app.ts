import app from "./server";

const PORT = 3000;

(async () => {
  app.listen(PORT, () => {
    console.log(`Phone-store-api listening on port ${PORT}.`);
  });
})();
