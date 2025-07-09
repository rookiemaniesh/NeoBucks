import express from "express";
import * as z from "zod/v4";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import User from "../models/User.js";
import auth from "../middlewares/auth.js";
import Bank from "../models/Bank.js";

const userRouter = express.Router();

const userSignupSchema=z.object({
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
const userSigninSchema=z.object({
    email:z.string().email(),
    password:z.string()
            .min(5,"Length of Password is too short")
            .max(20,"Length of Password is too long")
            .regex(/[A-Z]/,"Password should contain atleast one Uppercase")
            .regex(/[a-z]/,"Password should contain atleast one Lowercase")
            .regex(/[0-9]/,"Password should contain atleast one Digit")
            .regex(/[\W_]/,"Password should contain atleast one Special Chracter")

    
})
const userUpdateSchema=z.object({
    password:z.string()
            .min(5,"Length of Password is too short")
            .max(20,"Length of Password is too long")
            .regex(/[A-Z]/,"Password should contain atleast one Uppercase")
            .regex(/[a-z]/,"Password should contain atleast one Lowercase")
            .regex(/[0-9]/,"Password should contain atleast one Digit")
            .regex(/[\W_]/,"Password should contain atleast one Special Chracter")
            .optional(),
    firstName:z.string().min(2,"Name too short").optional(),
    lastName:z.string().min(2,"Name too short").optional(),

}).strict();


userRouter.post("/signup",async(req,res)=>{
    const ParseResult=userSignupSchema.safeParse(req.body)
    console.log(ParseResult)
    if(!ParseResult.success){
       return res.status(404).json({
            message:"Validation Error",
            errors:ParseResult.error.flatten().fieldErrors
        })
    }else{

        const {email,password,firstName,lastName} = req.body;
        const ExistingUser=await User.findOne({email})
        
        if(ExistingUser){
           return res.status(404).json({
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
            await Bank.create({
                userId,
                balance:10000
            })
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
    const ParseResult=userSigninSchema.safeParse(req.body)
    if(!ParseResult.success){
      return  res.status(404).json({
            message:"Validation Error",
            errors:ParseResult.error.flatten().fieldErrors
        })
    }
    try {
         const {email,password}=req.body;
    const ValidUser=await User.findOne({
        email
    })
    if(!ValidUser){
       return res.status(404).json({
            message:"Wrong Credentials"
        })
    }else{
        const ValidPassword=await bcrypt.compare(password,ValidUser.password)
        if(!ValidPassword){
            return res.status(404).json({
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
    } catch (error) {
        res.status(500).json({
            message:"Something Went Wrong",
            errors:error 
        })
    }
   
})
userRouter.put("/profile",auth,async(req,res)=>{
    const ParseResult=userUpdateSchema.safeParse(req.body)
    if(!ParseResult.success){
        return res.status(411).json({
            message:"Invalid Data",
            errors:ParseResult.error.flatten().fieldErrors
        })
    }
    try {
        const userId=req.userId;
        const updateData={...ParseResult.data}
        if(updateData.password){
            updateData.password=await bcrypt.hash(updateData.password,10)
        }
        await User.updateOne({_id:userId},updateData)
        res.json({
            message:"Updated Succesfully"
        })

    } catch (error) {
        res.status(500).json({
            message:"Something Went Wrong",
            errors:error
        })
    }   
})
userRouter.get("/bulk",auth,async(req,res)=>{
    const filter=req.query.filter || "";
    const users=await User.find({
        $or:[{
            firstName:{
                "$regex":filter
            }
        },{
            lastName:{
                "$regex":filter
            }
        }]
    })
    res.json({
        user:users.map(user=>({
            email: user.email,
            firstName:user.firstName,
            lastName:user.lastName,
            _id:user._id
        }))
    })
})

export default userRouter; 
