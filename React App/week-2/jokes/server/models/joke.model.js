// import mongoose
const mongoose = require('mongoose')
// the schema 
const JokeSchema = new mongoose.Schema(
    {
       
        setup:
        {
            type: String,
            required:[true, "{PATH} must be required🆎🆎🆎"],
            minlength: [10,"{Path} must be at least 10 character🔤🔤🔤"]
        },
        punchline: 
        {
            type: String,
            required:[true, "{PATH} must be required🆎🆎🆎"],
            minlength: [10,"{Path} must be at least 10 character🔤🔤🔤"]
        }
    },
    {timestamps:true}
)
// first method
const Joke = mongoose.model("Joke", JokeSchema)
module.exports = Joke;
