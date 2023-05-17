const mongoose=require("mongoose");
//product schema created

const productSchema=new mongoose.Schema({
   product:{type:Array}
}, {
    version_key:false,
    timestamps:true
});

const Product = mongoose.model("product",productSchema);


module.exports=Product;