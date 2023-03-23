const Note = require("../models/note.model")
module.exports = 
{
    //++++++++++++++READ ALL NOTES++++++++++++++++++++++//
    findAll : (req,res)=>
    {
        Note.find()
        .then(allNotes => {
            res.json({allNotes})
        })
        .catch(err=>res.status(400).json(err.errors))
    },
    //++++++++++++++++CREATE  NOTE+++++++++++++++++++++++//
    create:(req,res)=>
    {
        Note.create(req.body)
        .then(newNote => res.json({newNote})) // najmou n7ottouha bel  {} ou non poour newnote
        .catch(err=>res.status(400).json(err.errors))
    },
    //++++++++++++++++READ ONE NOTE+++++++++++++++++++++++//
    findOne:(req,res)=>
    {
     // soit hedhi Note.findOne({_id:req.params.id}) ou l'autre 
        Note.findById(req.params.id)
        .then(oneNote=>res.json(oneNote))
        .catch(err=>res.status(400).json(err))
    },
    //++++++++++++++++Update ONE NOTE+++++++++++++++++++++++//
    update:(req,res)=>
    {
        Note.findByIdAndUpdate(req.params.id, req.body, {new:true, runValidators:true})
        .then(updatedNote=>res.json(updatedNote))
        .catch(err=>res.status(400).json(err.errors));
    },
     //++++++++++++++++Delete ONE NOTE+++++++++++++++++++++++//
     delete:(req,res)=>
     {
        Note.findByIdAndDelete(req.params.id)
        .then(result=> res.json(result))
        .catch(err=>res.json(err));
     }


}