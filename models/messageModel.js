import { Schema, Types, model } from "mongoose";

const messageSchema = new Schema({
    conversationID: { type: Types.ObjectId, required: true },
    senderID: { type: Types.ObjectId, required: true, ref: "Users" },
    content: { type: String, required: true },
    status: { type: String, default: "Delivered" }
}, {
    timestamps: true
});

export const MessageModel = model("Messages", messageSchema);