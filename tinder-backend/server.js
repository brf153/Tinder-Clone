import express from "express"
import mongoose from "mongoose"
import tinder from "./dbCards.js"
import cors from "cors"
import dotenv from "dotenv"

dotenv.config({path: "./config.env"})

//APP CONFIG
const app = express()
const port = 8001

//MIDDLEWARES
app.use(express.json())
app.use(cors())

//DB CONFIG
mongoose.connect(process.env.DBURI).then(()=>{console.log("database connected")}).catch((e)=>console.log(e.message))

//API ENDPOINTS
app.get("/",(req,res)=>{
    res.status(200).send("Hello World!")
})

app.post("/tinder/cards",(req,res)=>{
    const dbCard = req.body
    tinder.create(dbCard).then((e)=>res.status(200).send(e)).catch((e)=>console.log(e.message))
})

app.get("/tinder/cards",(req,res)=>{
    tinder.find().then((e)=>res.status(200).send(e)).catch((e)=>console.log(e.message))
})

//LISTENER
app.listen(port,()=>{
    console.log(`Server connected on: ${port}`)
})
