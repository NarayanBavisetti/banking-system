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

router.get("/customers",async (req, res) => {
    try {
      const User = await user.find();
      res.send(User);
      console.log(User)
    //   res.status(200).json(User.favourite);
      // console.log(User.favourite)
    } catch (e) {
      console.log(e);
      res.status(500).json();
    }
  });

module.exports = router;