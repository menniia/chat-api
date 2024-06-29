import { Schema, Types, model } from "mongoose";


// this model is created to support group chats
const conversationSchema = new Schema({
    recipients: [{ type: Types.ObjectId, ref: "Users" }]
}, {
    timestamps: true
});

export const ConversationModel = model("Conversations", conversationSchema);