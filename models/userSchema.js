const mongoose = require("mongoose")
const userSchema = mongoose.Schema({
    
})
const user = mongoose.model("bank-user",userSchema);

module.exports = user;