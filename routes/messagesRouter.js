import { Router } from "express";
import { addChat, deleteChat, getChat, getSingleChat, updateChat } from "../controllers/messagesController.js";

const messageRouter = Router();

// get all messages
messageRouter.get("/chats", getChat);

// get a single message
messageRouter.get("/chats/:id", getSingleChat);

// add message
messageRouter.post("/chats", addChat);

// update a message
messageRouter.patch("/chats/:id", updateChat);

// delete a message
messageRouter.delete("/chats/:id", deleteChat);

export default messageRouter;