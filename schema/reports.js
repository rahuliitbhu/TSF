const mongoose =require('mongoose')


const reportSchema=mongoose.Schema({
 
    marketID:{
        type:String,
        required:true
    },
    marketName:{
        type:String,
        required:true
    },
    cmdtyID:{
        type:String,
        required:true
    },
    cmdtyName:{
        type:String,
        required:true
    },
    users:[{
        type:String,
        required:true
    }],
    priceUnit:{
        type:String,
        def:"Kg"
        
    },
    priceArray:[{
        type:Number,
       
    }],

    price:{
        type:Number,
        required:true
    },

})


mongoose.model('reportDetails',reportSchema)