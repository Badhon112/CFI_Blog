import express from 'express'
import mongoose from 'mongoose'
import Connection from './database/db.js'
import dotenv from 'dotenv'
dotenv.config()
import Router from './routes/route.js'
const username=process.env.DB_USERNAME
const password=process.env.DB_PASSWORD
const app=express()
const PORT=8000


app.use("/",Router)


app.listen(PORT,()=>{
    console.log("Server is Running on Port "+PORT);
})
Connection(username,password)