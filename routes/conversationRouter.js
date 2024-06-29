import { Router } from "express";
import { addConversation, deleteConversation, getAllConversations, getOneConversation, updateConversation } from "../controllers/conversationsController.js";

const conversationRouter = Router();


// get all conversations
conversationRouter.get("/groupChats", getAllConversations);

// get single conversation
conversationRouter.get("/groupChats", getOneConversation);

// add a conversation
conversationRouter.post("/groupChats", addConversation);

// update conversation
conversationRouter.patch("/groupChats", updateConversation);

// delete conversation
conversationRouter.delete("/groupChats", deleteConversation);

export default conversationRouter;