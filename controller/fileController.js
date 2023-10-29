import AWS from 'aws-sdk'
import dotenv from 'dotenv'

dotenv.config()

console.log('dredentials',process.env.ACCESS_SECRET);
AWS.config.update({
    accessKeyId: process.env.ACCES_KEY,
    secretAccessKey: process.env.ACCES_SECRET ,
    region: process.env.REGION,
  });
  
  const s3 = new AWS.S3();
const BUCKET = 's3-nodejs6225'

export const fileUpload = async(req,res)=>{

    const params = {
        Bucket: BUCKET,
        Key: req.file.originalname,
        Body: req.file.buffer,
      };
      s3.upload(params, (err, data) => {
        if (err) {
          console.error(err);
          return res.status(500).send('Error uploading file');
        }
    
        res.send('File uploaded successfully');
      });
}

export const listFiles = async(req,res)=>{
   let result = await s3.listObjectsV2({Bucket:BUCKET}).promise()
   let data = result.Contents.map(item => item.Key)
   res.send(data)
}

export const deleteFile = async(req,res)=>{
    const filename = req.params.filename
    await s3.deleteObject({Bucket:BUCKET,Key:filename}).promise()
    res.send('file deleted successfully')
}