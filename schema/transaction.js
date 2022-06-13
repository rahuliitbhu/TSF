const mongoose =require('mongoose')


const reportSchema=mongoose.Schema({
 
    senderemail:{
        type:String,
        required:true
    },
    reciveremail:{
        type:String,
        required:true
    },
    amount:{
        type:Number,
        required:true
    }

})


mongoose.model('transac',reportSchema)