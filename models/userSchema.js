const mongoose = require("mongoose")
const userSchema = mongoose.Schema({
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    DOB:{
        type:Date,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    Address:{
        type:String,
        required:true
    },
    Phone:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    accountType:{
        type:String,
        required:true
    },
    amount:{
        type:Number,
        required:true
    },
    employment:{
        type:String,
        required:true
    },
})
const user = mongoose.model("bank-user",userSchema);

module.exports = user;