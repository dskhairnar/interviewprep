const mongoose = require("express");

const userSchema = new mongoose.Schema({

    name:{
        type:String,
        required:true,
        trim:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:string,
        required:true,
    }


})

const user = mongoose.module("user", userSchema);

module.exports = user;