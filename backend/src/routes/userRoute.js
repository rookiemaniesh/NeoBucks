import express from "express";
import * as z from "zod/v4";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import User from "../models/User.js";
const userSchema=z.object({
    email:z.string().email(),
    password:z.string()
            .min(5,"Length of Password is too short")
            .max(20,"Length of Password is too long")
            .regex(/[A-Z]/,"Password should contain atleast one Uppercase")
            .regex(/[a-z]/,"Password should contain atleast one Lowercase")
            .regex(/[0-9]/,"Password should contain atleast one Digit")
            .regex(/[\W_]/,"Password should contain atleast one Special Chracter"),
    firstName:z.string().min(2,"Name too short"),
    lastName:z.string().min(2,"Name too short"),

    
})

const userRouter = express.Router();

userRouter.post("/signup",async(req,res)=>{
    const ParseResult=userSchema.safeParse(req.body)
    console.log(ParseResult)
    if(!ParseResult){
        res.status(404).json({
            message:"Validation Error",
            errors:ParseResult.error.flatten().fieldErrors
        })
    }else{

        const {email,password,firstName,lastName} = req.body;
        const ExistingUser=await User.findOne({email})
        console.log(email)
        if(ExistingUser){
            res.status(404).json({
                message:"Email Already Exists"
            })
        }try {
            const HashedPassword=await bcrypt.hash(password,10)
             const user= await User.create({
                email,
                password:HashedPassword,
                firstName,
                lastName
            })
            const userId=user._id;
            const token=jwt.sign({userId},process.env.JWT_SECRET)
            res.status(200).json({
                message:"User Created",
                token:token
            })
        } catch (error) {
            res.status(500).json({
                message:"Something Went Wrong",
                errors:error
            })
        }
    }

})

userRouter.post("/signin",async (req,res)=>{
    const {email,password}=req.body;
    const ValidUser=await User.findOne({
        email
    })
    if(!ValidUser){
        res.status(404).json({
            message:"Wrong Credentials"
        })
    }else{
        const ValidPassword=await bcrypt.compare(password,ValidUser.password)
        if(!ValidPassword){
           res.status(404).json({
            message:"Wrong Credentials"
        }) 
        }else{
            const token=jwt.sign({userId:ValidUser._id},process.env.JWT_SECRET)
            res.status(200).json({
                message:"Signed In Succesfully",
                token:token
            })
        }
    }
})

export default userRouter; 
