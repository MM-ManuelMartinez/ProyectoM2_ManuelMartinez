const express = require("express");
const routerAuthors = express.Router();

const {obtenerAuthors} = require("../controllers/authors.controllers.js");

routerAuthors.get("/", obtenerAuthors);

module.exports = routerAuthors;