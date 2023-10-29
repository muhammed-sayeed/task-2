import jsonwebtoken from 'jsonwebtoken'

export const tokenCheck = (req,res,next)=>{
    try {
        const token = req.body.token || req.query.token || req.headers['authorization']
        if(token){
            jsonwebtoken.verify(token,process.env.access_secret,function(err,decoded){
                if(err){
                    return res.status(401).json({"message":'unauthorized access'})
         }
         res.locals.jwt_user = decoded;
         next()
            })
        }else{
            return res.status(401).json({
                "msg":'No token Provided'
            })
        }
    } catch (error) {
        res.status(400).jsno({message:"something went wroong"})
    }
   
}