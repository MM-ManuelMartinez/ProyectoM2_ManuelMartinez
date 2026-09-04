const express = require("express");

const app = express();

const authorsRouter = require("./routes/authors.routes.js");

const postsRouter = require("./routes/posts.routes.js");

app.use(express.json());

app.use("/authors", authorsRouter);

app.use("/posts", postsRouter);

app.listen(3000);
