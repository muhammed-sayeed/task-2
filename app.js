import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'

import routes from './router/routes.js'

dotenv.config()
const app = express()


mongoose.connect(process.env.database)
mongoose.connection.on('connected',()=>{
    console.log('database connected');
})

app.use(express.json())
app.use(bodyParser.urlencoded({extended:true}))

const port = process.env.PORT || 3000
app.listen(port,()=>{
    console.log(`server running on ${port}`);
})

app.use('/',routes)