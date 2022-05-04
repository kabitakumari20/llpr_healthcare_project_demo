const mongoose = require("mongoose");
const validator = require("validator");
const Schema = mongoose.Schema

const patientSchema = new mongoose.Schema({
    first_Name: {
        type: String,
    },
    last_Name: {
        type: String,
    },

    dob: {
        type: Number,
    },
    sex: {
        type: String,
    },
    email: {
        type: String,
        unique: [true, "Email id already present"],
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new error("invalide Email")
            }
        }

    },
    password: {
        type: String,
        unique: true
    },


    marital_status:{
        type:String
    },
    mobile:{
        type:Number,
        require:true
    },

    state:{
        type:String
    },

    city:{
        type:String
    },
    pin:{
        type:Number
    }

    

})
const patient = mongoose.model("patient", patientSchema)
module.exports = patient