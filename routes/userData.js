const express = require("express")
const router = express.Router();
const user = require("../models/userSchema");

router.post("/add" ,async (req,res) => {
    const {firstName, lastName, Phone, DOB, gender, Address,name, email, employment, accountType, amount } = req.body;
if( !firstName  || !lastName || !Phone || !DOB || !gender || !Address || !name || !email || !employment || !accountType || !amount){
    return res.status(400).json({msg:'Please fill all the details'})
}
const newUser = new user({
    firstName, lastName, Phone, DOB, gender, Address,name, email, employment, accountType, amount 
})

await newUser.save()
})

module.exports = router;