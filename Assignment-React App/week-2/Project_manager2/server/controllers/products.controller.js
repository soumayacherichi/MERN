const Product = require ("../models/product.model")

//Read / Get all 
module.exports.findAllProducts=(req,res)=>{
    Product.find().then(allProducts=>{
        console.log("all products from DB",allProducts)
        res.json(allProducts)
    }).catch(err=>console.log(err))
}

//Read /Get one
module.exports.findOne=(req,res)=>{
    Product.findOne({_id:req.params.id}).then(product=>{
        console.log("This product",product)
        res.json(product)
    }).catch(err=>{
        console.log(err)
        res.json({error:err})
    })
}

//Create one
module.exports.createProducts=(req,res)=>{
    Product.create(req.body).then(newProduct=>{
        console.log("New product",newProduct)
        res.json(newProduct)
    }).catch(err=>{
        console.log(err)
        res.status(400).json({error:err})
    })
}

//Update one
module.exports.updateProduct=(req,res)=>{
    Product.findByIdAndUpdate({_id:req.params.id}, req.body, {new:true, runValidators:true})
        .then(newProduct=>{
        console.log("New product",newProduct)
        res.json(newProduct)
    }).catch(err=>{
        console.log(err)
        res.json({error:err})
    })
}

//Delete one
module.exports.deleteProduct=(req,res)=>{
    Product.deleteOne({_id:req.params.id})
        .then(result=>{
        console.log("Delete result",result)
        res.json(result)
    }).catch(err=>{
        console.log(err)
        res.json({error:err})
    })
}

//Go to routes  ====>