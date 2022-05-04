const mongoose = require("mongoose");
const validator = require("validator");
const Schema = mongoose.Schema

const encountersSchema = new mongoose.Schema({


    patientId: {
        type: Schema.Types.ObjectId,
        ref: 'patient'
    },
    start_Date: {
        type: Date,
    },
    end_Date: {
        type: Date,
    },

    patient_Wight: {
        type: Number,
    },
    patient_height:{
        type:Number
    }
    

    

})
const encounters = mongoose.model("encounters", encountersSchema)
module.exports = encounters