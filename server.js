const {app,Port}=require("./src/index");

const connect=require("./src/config/db");

app.listen(Port,async ()=>{
   try {
    await connect();  
    console.log("connect");  
   } catch (error) {
        console.log({"message": error.message})
   }
})