const express = require("express");
const routerAuthors = express.Router();

const {
    getAuthors,
    getAuthor,
    createUserAuthor,
    updateUserAuthor
} = require("../controllers/authors.controllers.js");

const { 
    validateUserAuthor,
    validateUserUpdate
 } = require("../middlewares/authors.middleware.js");

routerAuthors.get("/", getAuthors);

routerAuthors.get("/:id", getAuthor);

routerAuthors.post("/", validateUserAuthor, createUserAuthor);

routerAuthors.put("/:id", validateUserUpdate , updateUserAuthor);


module.exports = routerAuthors;