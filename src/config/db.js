const mongoose=require("mongoose");

require('dotenv').config();

const  connect =async()=>{
    try{

        return await (mongoose.connect(`mongodb+srv://${process.env.USER_NAME}:${process.env.PASSWORD}@login.prj0v2u.mongodb.net/master`));
    }catch(err){
        
    }
}
module.exports=connect;