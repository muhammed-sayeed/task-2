import express from 'express'
import multer from 'multer'
import dotenv from 'dotenv'

dotenv.config()

const routes = express.Router()


const upload = multer({
    storage: multer.memoryStorage(),
    limits: {
      fileSize: 5 * 1024 * 1024, // limit file size to 5MB
    },
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

