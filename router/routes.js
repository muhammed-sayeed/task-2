import express from 'express'
import multer from 'multer'
import dotenv from 'dotenv'

dotenv.config()

const routes = express.Router()

const fileFilter = (req,file,cb)=>{
    const allowTypes = ['image/jpeg', 'image/png', 'video/mp4', 'application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document']
    if(allowTypes.includes(file.mimetype)){
        cb(null,true)
    }else{
        cb(new Error('Invalid file type. Only image (JPEG, PNG), video (MP4), and documents (PDF, DOC, DOCX) are allowed.'))
    }
}

const upload = multer({
    storage: multer.memoryStorage(),
    limits: {
      fileSize: 5 * 1024 * 1024, // limit file size to 5MB
    },
    fileFilter: fileFilter
  });


import { register } from '../controller/authController.js'
import { login } from '../controller/authController.js'
import { fileUpload } from '../controller/fileController.js'
import { listFiles } from '../controller/fileController.js'
import { deleteFile } from '../controller/fileController.js'

routes.post('/register',register)
routes.post('/login',login)
routes.post('/upload',upload.single("file"),fileUpload)
routes.get('/list',listFiles)
routes.delete('/delete/:filename',deleteFile)

export default routes

