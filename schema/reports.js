const mongoose =require('mongoose')


const reportSchema=mongoose.Schema({
 
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    balance:{
        type:Number,
        required:true
    }

})


mongoose.model('usersAccount',reportSchema)