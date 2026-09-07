const express = require("express");

const postsRouter = express.Router();

const {
    getPosts,
    getPost,
    getAuthorPosts,
    newPost,
    updatePost,
    deletePost
} = require("../controllers/posts.controllers.js");

const {
    validatePost,
    validateAuthorPosts,
    validateNewPost,
    validateUpdatePost
} = require("../middlewares/posts.middleware.js");

postsRouter.get("/", getPosts);

postsRouter.get("/:id", validatePost, getPost);

postsRouter.get("/author/:authorId", validateAuthorPosts, getAuthorPosts);

postsRouter.post("/", validateNewPost, newPost);

postsRouter.put("/:id", validateUpdatePost, updatePost);

postsRouter.delete("/:id", validatePost, deletePost);


module.exports = postsRouter;