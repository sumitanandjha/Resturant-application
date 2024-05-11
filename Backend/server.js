import app from "./app.js";


app.listen(process.env.PORT || 8000,()=>{
    console.log(`server running on port ${process.env.PORT}`)
})