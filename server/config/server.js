"use strict";

const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes.js");
const app = express();
const cors = require("cors");

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(routes);

const port = 1234;

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});