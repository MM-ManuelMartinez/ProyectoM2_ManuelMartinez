const express = require("express");

const postsRouter = express.Router();

const {
    getPosts,
    getPost,
    getAuthorPosts,
    newPost
} = require("../controllers/posts.controllers.js");

const {
    validatePost,
    validateAuthorPosts,
    validateNewPost
} = require("../middlewares/posts.middleware.js");

postsRouter.get("/", getPosts);

postsRouter.get("/:id", validatePost, getPost);

postsRouter.get("/author/:authorId", validateAuthorPosts, getAuthorPosts);

postsRouter.post("/", validateNewPost, newPost);


module.exports = postsRouter;