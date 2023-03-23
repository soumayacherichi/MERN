// import mongoose
const mongoose = require('mongoose')
// the schema 
const NoteSchema = new mongoose.Schema(
    {
        title:{
            type: String,
            required:[true, "{PATH} must be present🆎🆎🆎"],
            minlength: [3,"{Path} must be at least 3 character🔤🔤🔤"]
        },
        content:
        {
            type: String,
            required:[true, "{PATH} must be required🆎🆎🆎"],
            minlength: [10,"{Path} must be at least 10 character🔤🔤🔤"]
        },
        isImportant: 
        {
            type: Boolean,
        }
    },
    {timestamps:true}
)
// first method
const Note = mongoose.model("Note", NoteSchema)
module.exports = Note;
//second method
// module.exports.note= mongoose.model("Note", NoteSchema)
