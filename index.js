const express = require("express");

const app = express();
const port = 4000;

app.use(() => {
  console.log(`Server Listen to port ${port}`);
  console.log("Hellow 2");
});

app.listen(port);
