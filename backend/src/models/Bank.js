import mongoose, { Schema } from "mongoose";


const BankSchema= new Schema({
    userId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'User',
    required:true
    },
    balance:{
        type:Number,
        required:true
    }
});
const Bank= mongoose.model("Bank",BankSchema);
export default Bank;