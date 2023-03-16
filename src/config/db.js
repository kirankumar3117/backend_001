const mongoose=require("mongoose");

require('dotenv').config();

const connect =()=>{
    return (mongoose.connect(`${process.env.DATA_BASE_URL}/master`));
}
module.exports=connect;