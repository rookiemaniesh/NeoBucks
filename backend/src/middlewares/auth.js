import jwt from"jsonwebtoken";


const auth=async(req,res,next)=>{
    const authHeader=req.headers.token;
    try {
        const decoded=jwt.verify(authHeader,process.env.JWT_SECRET)
        if(!decoded){
            return res.status(404).json({
                message:"Please SignIn"
            })
        }
        else{
            req.userId=decoded.userId;
            next();
        }
    } catch (error) {
        res.status(500).json({
            message:"Something Went Wrong",
            errors:error
        })
    }
}
export default auth;