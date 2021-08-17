const mongoose = require("mongoose")
const transSchema = mongoose.Schema({
    userOne:{
        type:String,
        required:true
    },
    userTwo:{
        type:String,
        required:true
    },
    amount:{
        type:Number,
        required:true
    },

})
const transactions = mongoose.model("transactions",transSchema);

module.exports = transactions;