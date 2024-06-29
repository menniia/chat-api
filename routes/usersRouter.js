import { Router } from "express";
import { addUser, getAllUsers, getOneUser, updateUser } from "../controllers/usersController.js";

const usersRouter = Router();

usersRouter.get("/users", getAllUsers);

// get single user
usersRouter.get("/users", getOneUser);

// update User
usersRouter.patch("/users", updateUser);

// add user
usersRouter.post("/users", addUser);

export default usersRouter;