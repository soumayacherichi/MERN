const Joke = require("../models/joke.model")
module.exports = 
{
    //++++++++++++++READ ALL JokeS++++++++++++++++++++++//
    findAll : (req,res)=>
    {
        Joke.find()
        .then(allJokes => {
            res.json({allJokes})
        })
        .catch(err=>res.status(400).json(err.errors))
    },
    //++++++++++++++++CREATE  JokE+++++++++++++++++++++++//
    create:(req,res)=>
    {
        Joke.create(req.body)
        .then(newJoke => res.json({newJoke})) 
        .catch(err=>res.status(400).json(err.errors))
    },
    //++++++++++++++++READ ONE Joke+++++++++++++++++++++++//
    findOne:(req,res)=>
    {
        Joke.findById(req.params.id)
        .then(oneJoke=>res.json(oneJoke))
        .catch(err=>res.status(400).json(err))
    },
    //++++++++++++++++Update ONE Joke+++++++++++++++++++++++//
    update:(req,res)=>
    {
        Joke.findByIdAndUpdate(req.params.id, req.body, {new:true, runValidators:true})
        .then(updatedJoke=>res.json(updatedJoke))
        .catch(err=>res.status(400).json(err.errors));
    },
     //++++++++++++++++Delete ONE Joke+++++++++++++++++++++++//
     delete:(req,res)=>
     {
        Joke.findByIdAndDelete(req.params.id)
        .then(result=> res.json(result))
        .catch(err=>res.json(err));
     }


}