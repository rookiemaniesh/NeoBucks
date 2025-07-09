const express = require("express");
const { default: User } = require("../models/User");
const { default: userRouter } = require("./userRoute");
const { default: accountRouter } = require("./account");

const Router= express.Router();
Router.use("/user",userRouter)
Router.use("/account",accountRouter)

// Router.post("/",async(req,res)=>{
//     let email="abaac@gmail.com";
//     let password="12345";
//     let firstName="John";
//     let lastName="Doe";
//     await User.create({
//         email,
//         password,
//         firstName,
//         lastName
//     }).then((user)=>{
//         res.status(201).json({
//             message:"User created successfully",
//             user
//         })
//     }).catch((error)=>{
//         res.status(500).json({
//             message:"Error creating user",
//             error
//         })
//     })
// })

module.exports= Router;
