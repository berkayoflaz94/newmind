const jwt = require('jsonwebtoken');
const authMiddleware = (req,res,next) => {
    //Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImJlcmtheS5vZmxhekBob3RtYWlsLmNvbSIsImlhdCI6MTczMjM1NjcyMSwiZXhwIjoxNzMyMzYwMzIxfQ.Yvd_nnX6Lm_zF6lmUPEe9kAJ2FKHmwIvSe3e42L2boM
    console.log(req.header('Authorization'),'gelen token')
    const token = req.header('Authorization')?.split(' ')[1]; //eykjdlkjlajfasşdfkşsdkfmdfçgmşdlfgsf
    if(!token){
        return res.status(401).json({message:'no token provided'})
    }

    try{
        const decoded = jwt.verify(token,process.env.JWT_SECRET)
        req.user = decoded;
        next();
    }catch(e){
        res.status(401).json({message:"invalid token"})
    }
    
}

module.exports = authMiddleware