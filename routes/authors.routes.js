const express = require("express");
const routerAuthors = express.Router();

const {
    getAuthors,
    getAuthor,
    createUserAuthor,
    updateUserAuthor,
    deleteUserAuthor
} = require("../controllers/authors.controllers.js");

const { 
    validateAuthorId,
    validateUserAuthor,
    validateUserUpdate,
    validateUserDelete
 } = require("../middlewares/authors.middleware.js");

routerAuthors.get("/", getAuthors);

routerAuthors.get("/:id", validateAuthorId, getAuthor);

routerAuthors.post("/", validateUserAuthor, createUserAuthor);

routerAuthors.put("/:id", validateUserUpdate , updateUserAuthor);

routerAuthors.delete("/:id", validateUserDelete, deleteUserAuthor);


module.exports = routerAuthors;