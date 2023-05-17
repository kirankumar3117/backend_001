const express=require("express");

const router=express.Router();

const Products=require("../model/product.schema")


  router.get("/products",async(req,res)=>{
   
    try {
      const product = await Products.find();
      if (!product) {
        return res.status(503).json({ message: 'service un available' });
      }
    
      res.status(200).json({products:product});
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  })


  module.exports=router;
