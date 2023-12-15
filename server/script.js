const express = require('express')
const mongoose= require('mongoose')
const cors=require('cors')

const app=express()
app.use(express.json())
app.use(cors())
const usermodel=require('./models/user')

mongoose.connect("mongodb://127.0.0.1:27017/testdb"); 
app.post('/register',(req,res)=>{
usermodel.create(req.body)
.then(users=>res.json(users)
  )
.catch(err=>res.json(err))

})

app.post('/login',(req,res)=>{
  const {username,password}=req.body;
  usermodel.findOne({username:username})
  .then(user=>{
    if(user){
        if (user.password===password){res.json("success")}
        else{ res.json("password incorrect")}
     
    }
    else{res.json("no record existed")}
   
  })

  
  
  })


app.listen(3001,()=>console.log("server is running"))