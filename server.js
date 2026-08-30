const express = require("express");

const app = express();

const authorsRouter = require("./routes/authors.routes.js");

app.use(express.json());

app.use("/authors", authorsRouter);

app.listen(3000);