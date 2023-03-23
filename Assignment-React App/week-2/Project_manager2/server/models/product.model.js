const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema
({
    Title: 
    {
        type:String,
        required:[true,"Product title is required❌❌❌❌❌"],
        minlength:3
    },
    Price: {type: Number,
            required:[true,"Product price is required❌❌❌❌❌"],
            min: 5
    },
    Description :
    {   type:String,
        required:[true,"Product description is required❌❌❌❌❌"],
        minlength:3
    },
});
//Convert ce schema en model 
const Product = mongoose.model('Product', ProductSchema)
module.exports = Product;
// Go to controller ===> 