//*************************************To create server *************************************/
const express = require('express')
const app = express()
//*****************To create connection between server and client **************************/
const cors = require('cors')
//****************************************Global variables *********************************/
const PORT = 8000
const DB = "jokeAppDB"
//***********************Middleware***********************************//
app.use(cors(),express.json(), express.urlencoded({extended:true}));
//***************Connect to Database******************* */
require("./config/mongoose.config")(DB)
//Import Routes
require("./routes/routes")(app)
// Run server 
app.listen(PORT, ()=>{console.log(`Server listening on port ${PORT} 📶📶📶📶📶`)});

