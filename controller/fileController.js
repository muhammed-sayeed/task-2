import AWS from 'aws-sdk'
import dotenv from 'dotenv'

dotenv.config()
AWS.config.update({
    accessKeyId: process.env.ACCES_KEY,
    secretAccessKey: process.env.ACCES_SECRET ,
    region: process.env.REGION,
  });
  
  const s3 = new AWS.S3();
const BUCKET = 's3-nodejs6225'

export const fileUpload = async(req,res)=>{

    try {
      const params = {
        Bucket: BUCKET,
        Key: req.file.originalname,
        Body: req.file.buffer,
      };
      s3.upload(params, (err, data) => {
        if (err) {
          console.error(err);
          return res.status(500).json({message:'Error uploading file'});
        }
    
        res.status(200).json({message:'File uploaded successfully'});
      });
    } catch (error) {
       res.status(404).json({message:"Resources not found"})
    }
}

export const listFiles = async(req,res)=>{
  try {
    let result = await s3.listObjectsV2({Bucket:BUCKET}).promise()
    let data = result.Contents.map(item => item.Key)
    res.json({message:"data fetched successfully",data})
  } catch (error) {
    res.status(404).json({message:"Resources not found"})
  }
}

export const deleteFile = async(req,res)=>{
    try {
      const filename = req.params.filename
    await s3.deleteObject({Bucket:BUCKET,Key:filename}).promise()
    res.status(200).json({message:'file deleted successfully'})
    } catch (error) {
      res.status(404).json({message:"Resources not found"})
    }
}