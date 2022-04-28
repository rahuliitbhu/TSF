const express=require('express')

const app=express()

const mongoose =require('mongoose')
const { MONGOURI } = require('./config')
const PORT = process.env.PORT || 5000
require('./schema/reports')

app.use(express.json())
app.use(require('./routes/report'))




mongoose.connect(MONGOURI)

mongoose.connection.on('connected',()=>{
    console.log("connected to database")
})

//r8pcftnrqmM9n6rL
//mongodb+srv://agrilink:<password>@cluster0.1xwh0.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
app.get('/home',(req,res)=>{
    
    res.send("success")
})

app.listen(PORT,()=>{
    console.log("server is running")
})