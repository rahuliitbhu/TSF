const express=require('express')

const app=express()
const cors = require('cors')

app.use(cors())
const mongoose =require('mongoose')
const { MONGOURI } = require('./config/keys')

const PORT = process.env.PORT || 5000
require('./schema/reports')
require('./schema/transaction')

app.use(express.json())
app.use(require('./routes/report'))





mongoose.connect(MONGOURI)

mongoose.connection.on('connected',()=>{
    console.log("connected to database")
})

/*
if(process.env.NODE_ENV==="production")
{
    app.use(express.static('client/build'))
    const path=require('path')
    app.get("*",(req,res)=>{
        res.sendFile(path.resolve(__dirname,'client','build','index.html'))
    })
}
*/

app.use(express.static(path.join(__dirname, "./client/build")));

app.get("*", function (_, res) {
  res.sendFile(
    path.join(__dirname, "./client/build/index.html"),
    function (err) {
      if (err) {
        res.status(500).send(err);
      }
    }
  );
});


app.get('/',(req,res)=>{
    res.send("hello")
})
app.listen(PORT,()=>{
    console.log("server is running")
})