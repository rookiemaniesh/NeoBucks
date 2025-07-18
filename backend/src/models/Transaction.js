import mongoose, { Model, Schema } from "mongoose";
const TransactionSchema=new Schema({
   from:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'User',
    required:true,

   },
   to:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'User',
    required:true,
   },
   amount:{
    type:Number,
    required:true,
    min:[0,"Amount Cannot Be Negative"]
   },
   timestamp:{
    type:Date,
    default:Date.now
   }
})