const express = require("express");

const postsRouter = express.Router();

const {
    getPosts
} = require("../controllers/posts.controllers")

postsRouter.get("/", getPosts);


module.exports = postsRouter;