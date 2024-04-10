import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required:true,
    },
    password:{
        type: String,
        required:true,
    },
    profileImage:{
        type: String,
    },


})


export const User = mongoose.model(userSchema,"User");