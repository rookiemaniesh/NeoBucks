const express = require("express");
const { default: ConnectDB } = require("./config/db");
require("dotenv").config();
const app= express();

app.use(express.json());

app.get("/",(req,res)=>{
    res.send("Welcome to NeoBucks API");
})
ConnectDB().then(()=>{
    app.listen(3000,()=>{
        console.log("Server is running on port 3000");
    })
})



