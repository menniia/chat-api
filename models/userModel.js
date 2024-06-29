import { Schema, model } from "mongoose";

const userSchema = new Schema({
    userName: { type: String, required: true, unique: true },
    profilePic: { type: String, required: true },
    userStatus: { type: String, default: "Offline"}
}, {
    timestamps: true
});

export const UsersModel = model("Users", userSchema);