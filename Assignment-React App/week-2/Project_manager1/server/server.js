const express = require ("express")
// require CORS 
const cors =require ("cors")
const app= express()
//Global variables
const PORT= 8000
const DB = "products_db"

//------------------Middleware variables------------//
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))
//--------------------Database Connection----------//
require("./config/mongoose.config")(DB);
//-----------------------Routes------------------//
require ("./routes/products.routes")(app);

app.listen(PORT, ()=>{
    console.log(`Server is running and listening On port  ${PORT}📶📶`);
})