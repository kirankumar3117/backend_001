const mongoose=require("mongoose");

require('dotenv').config();

const connect =()=>{
    return (mongoose.connect(`mongodb+srv://${process.env.USER_NAME}:${process.env.PASSWORD}@login.prj0v2u.mongodb.net/master`));
}
module.exports=connect;