import jwt from"jsonwebtoken";


const auth=async(req,res,next)=>{
    const authHeader=req.headers.token;
    if(!authHeader|| !authHeader.startsWith('Bearer')){
        return res.status(403).json({message:"SignUp"})
    }
    try {
        const token=authHeader.split(' ')[1];
        console.log(token)
        // console.log(authHeader)
        const decoded=jwt.verify(token,process.env.JWT_SECRET)
        console.log(decoded)
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
            message:"Something Went Wrong ",
            errors:error
        })
    }
}
export default auth;