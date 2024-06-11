const {Router} = require("express");

const {createPostHandler} = require("../handlers/postsHandlers")

const postsRouter = Router();

postsRouter.post("/", createPostHandler)


module.exports = postsRouter