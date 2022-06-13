const express=require('express')
const router = express.Router()

const mongoose =require('mongoose')
//const Report =mongoose.model("reportDetails")

const Users=mongoose.model("usersAccount")
const Transac=mongoose.model("transac")
router.get('/user',(req,res)=>{
    Users.find()
    .then(user=>{
        res.json({user})
    })
})

router.get('/gettransaction',(req,res)=>{
    Transac.find()
    .then(transac=>{
        res.json({transac})
    })
})
router.post('/userDetail',(req,res)=>{
    const {name,email,balance}=req.body

    const user = new Users({
        
       name,
       email,
       balance
    })

user.save()

.then(user=>{
    res.json({status:"success",reportID:user._id})
})





})


router.post('/transaction',(req,res)=>{
    const {senderemail,reciveremail,amount}=req.body
  
    const transaction = new Transac({
        senderemail,
        reciveremail,
       
       amount
    })

transaction.save()

.then(user=>{
    res.json({status:"success",reportID:user._id})
})





})





module.exports=router



