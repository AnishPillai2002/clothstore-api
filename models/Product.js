const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema({

    productname:{type:String, required:true, unique:true},
    desc:{type:String, required:true},
    img:{type:String,required:true},
    category:{type:Array},
    size:{type:String, required:true},
    color:{type:String, required:true},
    price:{type:Number, required:true},
},{timestamps:true});

module.exports = mongoose.model("Product",ProductSchema);