const express = require("express");

const app = express();

const { errorHandler } = require("./middlewares/error.middleware.js");

const authorsRouter = require("./routes/authors.routes.js");

const postsRouter = require("./routes/posts.routes.js");

app.use(express.json());

app.use("/authors", authorsRouter);

app.use("/posts", postsRouter);

app.use(errorHandler);

module.exports = app;