import ErrorHandler from '../error/error.js';
import {Reservation} from "../models/reservationSchema.js"

export const sendReservation =async(req,res,next)=>{
    const {firstName,lastName,email,phone,date,time}=req.body;
    if (!firstName || !lastName || !email || !phone || !date || !time) {
        return next(new ErrorHandler("Please fill out all fields in the reservation form!", 400));
    }
    
    try{
        const user=await Reservation.create({firstName,lastName,email,phone,date,time});
        res.status(200).json({
            sucess:true,
            message:"reservation sent sucessfully!",
        })
    }catch(error)
    {
        if(error.name==="ValidationError"){
            const validationErrors=Object.values(error.errors).map((err)=>err.message)
            return next(new ErrorHandler(validationErrors.join(','),400))
        }
        
    }
}