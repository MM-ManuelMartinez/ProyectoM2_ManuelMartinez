const express = require("express");

const postsRouter = express.Router();

const {
    getPosts,
    getPost
} = require("../controllers/posts.controllers.js");

const {
    validatePost
} = require("../middlewares/posts.middleware.js");

postsRouter.get("/", getPosts);

postsRouter.get("/:id", validatePost, getPost);


module.exports = postsRouter;