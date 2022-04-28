const express=require('express')
const router = express.Router()

const mongoose =require('mongoose')
const Report =mongoose.model("reportDetails")

router.post('/reports',(req,res)=>{
    const {userID,marketID,marketName,cmdtyID,cmdtyName,priceUnit,convFctr,price}=req.body


    Report.findOne({marketID:marketID,cmdtyID:cmdtyID})
    .then((savedReport)=>{

        
        if(savedReport)
        {
            var sum=price/convFctr
            
            savedReport.priceArray.map((item)=>{
                sum+=item
            })
         
            sum=sum/(savedReport.priceArray.length+1)

          
        Report.findByIdAndUpdate(savedReport._id,{
            
            $push:{users:userID},
            price:sum
            
        },{
            new:true
        })
        .then(report=>{
            Report.findByIdAndUpdate(savedReport._id,{
            
                $push:{priceArray:(price/convFctr)},
                price:sum
                
            },{
                new:true
            })
            .then(report=>{
            res.json({status:"success",reportID:report._id})})

  
    })
        }

    else
    {
        const report = new Report({
        
            
            marketID,
            marketName,
            cmdtyID,
            cmdtyName,
            $push:{priceArray:(price/convFctr)},
            $push:{users:userID},
            
            priceUnit:"Kg",
            
            price:(price/convFctr)
        })

    report.save()
    
    .then(report=>{
        res.json({status:"success",reportID:report._id})
    })

    }
    })
 
})


router.get('/reports',(req,res)=>{
    const {_id}=req.body
    

    Report.findById({_id:_id})
    .then((report)=>{
        res.json({
            marketID:report.marketID,
            marketName:report.marketName,
            cmdtyID:report.cmdtyID,
            cmdtyName:report.cmdtyID,
            users:report.users,
            priceUnit:report.priceUnit,
            
            price:report.price
        })
    })
    
})

module.exports=router



