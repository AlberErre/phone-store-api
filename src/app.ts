import app from "./server.js";

const PORT = 3000;

(async () => {
  app.listen(PORT, () => {
    console.log(`Phone-store-api listening on port ${PORT}.`);
  });
})();
