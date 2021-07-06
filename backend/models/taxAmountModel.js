const mongoose = require('mongoose')

const TaxAmountSchema  =new mongoose.Schema( {

    taxAmount: {
        type: Number
     },

     taxOverdue: {
        type: Number
     },

      penaltyOnOverdue: {
           type: Number
      },

      pollutingVehicleCharge: {
           type: Number
        },

        totalAmountToPay: {
            type: String
         },
         
         insurancePolicyNumber:{
            type:Number,
            required:true
         }
   
    },
    {
      timestamps: true,
    }
    );


    const TaxAmount=mongoose.model("TaxAmount",TaxAmountSchema)
  
module.exports=TaxAmount;