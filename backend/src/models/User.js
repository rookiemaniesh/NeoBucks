import mongoose, { Schema } from "mongoose";

const UserSchema= new Schema({
    email:{
        type: String,
        required: true,
        unique: true,
        trim:true,
        Lowercase: true,
        
    },
    password:{
        type:String,
        required: true,
        minLength:5,
        maxLength: 20
    },
    firstName:{
        type:String,
        required: true,
        minLength:2
    },
    lastName:{
        type:String,
        required:true,
        minLength:2
    }
})
const User= mongoose.model("User", UserSchema);
export default User;