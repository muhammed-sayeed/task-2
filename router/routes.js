import express from 'express'
const routes = express.Router()

import { register } from '../controller/authController.js'
import { login } from '../controller/authController.js'

routes.post('/register',register)
routes.post('/login',login)

export default routes

