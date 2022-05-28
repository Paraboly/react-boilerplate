const express = require("express");
const env = require("dotenv").config({
  path: resolve(__dirname, "../../.env")
}).parsed;

const app = express();
const portNumber = env.PORT || 2999;
const sourceDir = "dist";

app.use(express.static(sourceDir));

app.listen(portNumber, () => {
  console.log(`Express web server started: http://localhost:${portNumber}`);
  console.log(`Serving content from /${sourceDir}/`);
});
