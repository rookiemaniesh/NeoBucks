// const express=require("express")
import express from "express"
// import auth from "../middlewares/auth";
// import Bank from "../models/Bank";
import auth from "../middlewares/auth.js";
import Bank from "../models/Bank.js";
import mongoose from "mongoose";

const accountRouter=express.Router();

accountRouter.get("/balance",auth,async(req,res)=>{
    const userId=req.userId;
    console.log(userId)
    try{
    const account=await Bank.findOne({userId});
    console.log(account)
    res.status(200).json({
        balance:account.balance
    })
}catch(e){
    res.status(500).json({
        message:"Somrthing Went Wrong",
        errors:e
    })
}
})
accountRouter.post("/transfer",auth, async (req, res) => {
    
    const session = await mongoose.startSession();

    session.startTransaction();
    const { amount, to } = req.body;
    console.log(to);
    console.log(amount)

    // Fetch the accounts within the transaction
    const account = await Bank.findOne({ userId: req.userId }).session(session);
    console.log(account)

    if (!account || account.balance < amount) {
        await session.abortTransaction();
        return res.status(400).json({
            message: "Insufficient balance"
        });
    }

    const toAccount = await Bank.findOne({ userId: to }).session(session);

    if (!toAccount) {
        await session.abortTransaction();
        return res.status(400).json({
            message: "Invalid account"
        });
    }

    // Perform the transfer
    await Bank.updateOne({ userId: req.userId }, { $inc: { balance: -amount } }).session(session);
    await Bank.updateOne({ userId: to }, { $inc: { balance: amount } }).session(session);

    // Commit the transaction
    await session.commitTransaction();

    res.json({
        message: "Transfer successful"
    });
});

export default accountRouter;