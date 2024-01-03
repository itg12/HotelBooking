// require the necessary modules

const express = require('express')
const app = express()
const cors = require('cors')

// Solve the CORS Problem.

app.use(cors({
    origin: "*",
    methods: ["GET","POST","PUT", "DELETE"],      
}));

// Environment variable configuration

const dotenv = require('dotenv')
dotenv.config({path: './config.env'})
const PORT = process.env.PORT

// Database configuration

const mongoose = require('mongoose')
const connection = require('./DB/connection')


// Use some Middlewares

app.use(express.json())
app.use(require('./Routes/routes'))








app.listen(PORT,()=>{
    console.log(`Listening on Port: ${PORT}`)
})
