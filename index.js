const express = require('express')
const mongoose = require('mongoose')
require("dotenv").config();
const app = express();

const PORT  = process.env.PORT || 5000;
mongoose.connect(process.env.MONGODB_URL,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useFindAndModify:false,
    useUnifiedTopology:true
}).then(() => console.log("DB connected"))
.catch((e) => console.log(e))

// app.get("/",(req,res) => {
//     res.send("hi bruh")
// })
const userRoute = require("./routes/userData")
app.use(userRoute)
app.listen(PORT,() => console.log(`PORT is running at ${PORT}`))