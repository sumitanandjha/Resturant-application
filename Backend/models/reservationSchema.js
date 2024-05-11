import mongoose from "mongoose";
import validator from "validator";

const reservationSchema=new mongoose.Schema({
    firstName :{
        type:String,
        required:true,
        minLength:[3,"first name must contains at least 3 characters"],
        maxLength:[30,"first name can contain at most 30 charachters!"],
    },

    lastName :{
        type:String,
        required:true,
        minLength:[3,"last name must contains at least 3 characters"],
        maxLength:[30,"last name can contain at most 30 charachters!"],
    },
    email:{
        type:String,
        required:true,
        validate:[validator.isEmail,"provide a valid email"],

    },
    phone:{
        type:String,
        required:true,
        minLength:[10,"the number should be of 10 digits"],
        maxLength:[11,"the number should contain at most 11 digits"],
    },
    
    time:{
        type:String,
        required:true,
    },
    date:{
        type:String,
        required:true,
    }

});
export const Reservation  = mongoose.model("Reservation",reservationSchema);