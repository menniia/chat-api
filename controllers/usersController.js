import { UsersModel } from "../models/userModel.js";

export const getAllUsers = async (req, res, next) => {
    try {
        const allUsers = await UsersModel.find();
        res.json(allUsers);
    } catch (error) {
        next(error);
    }
}

export const getOneUser = async (req, res, next) => {
    try {
        const singleUser = await UsersModel.findById(req.params.id);
        res.json(singleUser);
    } catch (error) {
        next(error);
    }
}

export const updateUser = async (req, res, next) => {
    try {
        const userUpdate = req.body;
        const newUser = await UsersModel.findByIdAndUpdate(req.params.id, userUpdate, { new: true});
        res.json(newUser);
    } catch (error) {
        next(error);
    }
}

export const addUser = async (req, res, next) => {
    try {
        const addAnotherUser = await UsersModel.create(req.body);
        res.json(addAnotherUser);
    } catch (error) {
        
    }
}