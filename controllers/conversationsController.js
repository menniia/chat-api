import { ConversationModel } from "../models/conversationModel.js";


export const getAllConversations = async (req, res, next) => {
    try {
        const allConversations = await ConversationModel.find();
        res.json(allConversations);
    } catch (error) {
        next(error);
    }
}

export const getOneConversation = async (req, res, next) => {
    try {
        const singleConversation = await ConversationModel.findById(req.params.id);
        res.json(singleConversation);
    } catch (error) {
        next(error);
    }
}

export const addConversation = async (req, res, next) => {
    try {
        const toAddConversation = await ConversationModel.create(req.body);
        res.json(toAddConversation)
    } catch (error) {
        next(error);
    }
}

export const updateConversation = async (req, res, next) => {
    try {
        const UpdatedConversation = req.body;
        const newConversation = ConversationModel.findByIdAndUpdate(req.params.id, UpdatedConvo, { new: true});
        res.json(newConversation);
    } catch (error) {
        next(error);
    }
}


export const deleteConversation = async (req, res, next) => {
    try {
        const deleteRequest = req.body;
        const deletedConversation = ConversationModel.findByIdAndDelete(req.params.id, deleteRequest, { new: true});
        res.json(deletedConversation);
    } catch (error) {
        next(error);
    }
}