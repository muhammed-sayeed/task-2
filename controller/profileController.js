import User from "../models/user.js"

export const profile = async(req,res)=>{
    try {
        const email = res.locals.jwt_user.email
    const data = await User.findOne({email:email})
    res.status(200).json({message:"details fetched successfully",data})
    } catch (error) {
        res.status(400).json({message:"something went wrong"})
    }
}

export const editProfile = async(req,res)=>{
  try {
    const userMail = res.locals.jwt_user.email
    const {username, email} = req.body
    console.log(username,'-->',email);
    await User.findOneAndUpdate({email:userMail},{$set:{username:username,email:email}})
    res.status(200).json({message:"updated successfully"})
  } catch (error) {
    res.status(400).json({message:"something went wrong"})
  }
}