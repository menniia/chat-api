import { MessageModel } from "../models/messageModel.js";

// all chats
export const getChat = async (req, res, next) => {
    try {
        const allChats = await MessageModel.find()
        res.json(allChats);
    } catch (error) {
        next(error);
    }
}

// single chat
export const getSingleChat = async (req, res, next) => {
    try {
        const singleChat = await MessageModel.findById(req.params.id);
        res.json(singleChat);
    } catch (error) {
        next(error);
    } 
}

export const addChat = async (req, res, next) => {
    try {
        const addMessage = await MessageModel.create(req.body);
        res.status(200).json(addMessage);
    } catch (error) {
        next(error);
    }
}

export const updateChat = async (req, res, next) => {
    try {
        const updateRequest = req.body;
        const updateMessage = await MessageModel.findByIdAndUpdate(req.params.id, updateRequest, { new: true });
        res.json(updateMessage);
    } catch (error) {
        next(error);
    }
}

export const deleteChat = async (req, res, next) => {
    try {
        const deleteRequest = req.body;
        const deleteMessage = await MessageModel.findByIdAndDelete(req.params.id, deleteRequest, { new: true });
        res.json(deleteMessage);
    } catch (error) {
        next(error);
    }
}