import mongoose from "mongoose";
// import dotenv from "dotenv";
// dotenv.config();
const ConnectDB= async()=>{
    try {
        console.log("Mongo URL:", process.env.MONGODB_URL);

      await mongoose.connect(process.env.MONGODB_URL)
        .then(()=>{
            console.log("MongoDB connected successfully");
        })
        
    } catch (error) {
        console.log("MongoDB connection failed", error);
    }
}
export default ConnectDB;