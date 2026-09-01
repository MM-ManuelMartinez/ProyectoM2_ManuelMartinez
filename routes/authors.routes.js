const express = require("express");
const routerAuthors = express.Router();

const {
    getAuthors,
    getAuthor,
    createUserAuthor
} = require("../controllers/authors.controllers.js");

const { validateUserAuthor } = require("../middlewares/authors.middleware.js");

routerAuthors.get("/", getAuthors);

routerAuthors.get("/:id", getAuthor);

routerAuthors.post("/", validateUserAuthor, createUserAuthor);


module.exports = routerAuthors;