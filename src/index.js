const express=require("express");
const cors=require("cors");
const app=express();
const userController=require("./controller/user.controller");
const bodyParser = require('body-parser');

require('dotenv').config()

app.use(express.json());
app.use(cors());
app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));
const Port= process.env.PORT || 8000 ;


app.use("",userController);

module.exports={
    app:app,
    Port:Port
}