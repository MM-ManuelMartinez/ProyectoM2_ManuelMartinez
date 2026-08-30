const express = require("express");
const routerAuthors = express.Router();

const {
    obtenerAuthors,
    obtenerAuthor

} = require("../controllers/authors.controllers.js");

routerAuthors.get("/", obtenerAuthors);

routerAuthors.get("/:id", obtenerAuthor);











module.exports = routerAuthors;