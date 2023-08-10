const express = require('express')
const app = express()
const sumeetRouter = require('./routes/sumeet')

app.get('/', (req,res)=>{
    res.send("Landing Page AAVAAS");
})

app.get('/aniket', (req,res)=>{
    res.send("Aniket Page");
})

app.get('/atharva', (req,res)=>{
    res.send("Atharva Page");
})

app.get('/vighnesh', (req,res)=>{
    res.send("Vighnesh Page");
})

app.get('/akshad', (req,res)=>{
    res.send("Akshad Page");
})

app.get('/aayush', (req,res)=>{
    res.send("Aayush Page");
})

app.use('/sumeet', sumeetRouter)

app.listen(6900, (req,res)=>{
    console.log("Connection at port 6900")
})
app.use(express.static('public'))