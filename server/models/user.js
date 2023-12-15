const mongoose=require('mongoose')
const userschema= new mongoose.Schema({
    username:String,
    email:String,
    password:String,
})

const usermodel=mongoose.model("users",userschema)
module.exports=usermodel