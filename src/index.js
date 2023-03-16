const express=require("express");
const cors=require("cors");
const app=express();
const userController=require("./controller/user.controller");

require('dotenv').config()

app.use(express.json());
app.use(cors());

const Port= process.env.port || 8080 ;


app.use("",userController);

module.exports={
    app:app,
    Port:Port
}