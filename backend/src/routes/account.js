// const express=require("express")
import express from "express"
import auth from "../middlewares/auth";
import Bank from "../models/Bank";
const accountRouter=express.Router();

accountRouter.get("/balance",auth,async(req,res)=>{
    const userId=req.userId;
    try{
    const account=await Bank.find({userId});
    res.status(200).json({
        Balance:account.balance
    })
}catch(e){
    res.status(500).json({
        message:"Somrthing Went Wrong",
        errors:e
    })
}
})
accountRouter.post("/transfer",auth,async(req,res)=>{
    const{to,amount}=req.body;
    
})
export default accountRouter;