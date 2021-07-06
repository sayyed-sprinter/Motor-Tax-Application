const Vehicle = require('../models/vehicleModel');

const vehicle=function(req,res){
    const vehicleNumber=req.body.vehicleNumber;
    const bluebookNumber= req.body.bluebookNumber;
    const engineDisplacementInCC=req.body.engineDisplacementInCC;
    const insurancePolicyNumber=req.body.insurancePolicyNumber;
    
    const vehicleDetails=new Vehicle({vehicleNumber:vehicleNumber,
        bluebookNumber:bluebookNumber,engineDisplacementInCC:engineDisplacementInCC,
        insurancePolicyNumber:insurancePolicyNumber })

        vehicleDetails.save()  
        .then(function(result){
            res.status(201).json({message: "Vechile Details saved for further process"})
            console.log(req.body)
        })
        .catch(function(err){
            console.log(err)
            res.status(500).json({message:err})
        })
}


module.exports=vehicle;