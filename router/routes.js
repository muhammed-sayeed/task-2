import express from 'express'
import multer from 'multer'
import dotenv from 'dotenv'

import { tokenCheck } from '../middlwares/authenticate.js'

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


import { register, login } from '../controller/authController.js'
import { fileUpload, listFiles, deleteFile } from '../controller/fileController.js'
import { profile, editProfile } from '../controller/profileController.js'


routes.post('/register',register)
routes.post('/login',login)
routes.post('/upload',tokenCheck,upload.single("file"),fileUpload)
routes.get('/list',tokenCheck,listFiles)
routes.delete('/delete/:filename',tokenCheck,deleteFile)
routes.get('/profile',tokenCheck,profile)
routes.patch('/editprofile',tokenCheck,editProfile)

export default routes

