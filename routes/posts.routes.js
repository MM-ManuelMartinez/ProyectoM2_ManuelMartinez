const express = require("express");

const postsRouter = express.Router();

const {
    getPosts,
    getPost,
    getAuthorPosts
} = require("../controllers/posts.controllers.js");

const {
    validatePost,
    validateAuthorPosts
} = require("../middlewares/posts.middleware.js");

postsRouter.get("/", getPosts);

postsRouter.get("/:id", validatePost, getPost);

postsRouter.get("/author/:authorId", validateAuthorPosts, getAuthorPosts);


module.exports = postsRouter;