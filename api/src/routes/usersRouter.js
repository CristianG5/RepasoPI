const {Router} = require("express");

const {getUsersHandler, getDetailHandler, createUsersHandler} = require("../handlers/usersHanlers")

const usersRouter = Router();



usersRouter.get("/", getUsersHandler)

usersRouter.get("/:id", getDetailHandler)

usersRouter.post("/", createUsersHandler)


module.exports = usersRouter