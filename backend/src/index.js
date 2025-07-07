const express = require("express");
const { default: ConnectDB } = require("./config/db");
const { default: User } = require("./models/User");

require("dotenv").config();
const app= express();

app.use(express.json());

app.post("/",async(req,res)=>{
    let email="abc@gmail.com";
    let password="12345";
    let firstName="John";
    let lastName="Doe";
await User.create({
        email,
        password,
        firstName,
        lastName
    }).then((user)=>{
        res.status(201).json({
            message:"User created successfully",
            user
        })
    }).catch((error)=>{
        res.status(500).json({
            message:"Error creating user",
            error
        })
    })
})
ConnectDB().then(()=>{
    app.listen(3000,()=>{
        console.log("Server is running on port 3000");
    })
})



