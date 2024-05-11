import mongoose from "mongoose";

   export const dbConnection = () => {
    mongoose
    .connect(process.env.MONGO_URI,{
        dbName:"project_1",
    })
    .then(()=>{
        console.log("connected to database sucessfully!");
    }).catch(err=>{
        console.log(`some error occured while connecting to the database ${err}`)
    })
}