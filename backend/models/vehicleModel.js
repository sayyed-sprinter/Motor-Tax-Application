const mongoose = require('mongoose')

const VehicleSchema  =new mongoose.Schema( {
    
    vehicleRegisteredDate: {
        type: Date
     },
  
     vehicleName: {
        type: String,
     },

     vehicleBrand: {
        type: String,
     },

      vehicleNumber: {
           type: String,
            required: true,
        },

        vehicleType: {
          type: String,
           required: true,
       },

      bluebookNumber: {
           type: String,
           required: true,
           unique: true 
        },

      engineCC: { 
          type: Number,
          required: true,
        },

        province: {
            type: String,
         },
    
    });

const VehicleDetails=mongoose.model('VehicleDetails',VehicleSchema)

module.exports=VehicleDetails;