const mongoose=require("mongoose");
const bcrypt = require('bcrypt');
//user schema created

const userSchema=new mongoose.Schema({
    email: {type:String,required:true},
    password:{type:String,required:true},
    data:{tyep:Object,user:{
        details:[],
        address:[]
    }}
}, {
    version_key:false,
    timestamps:true
})

// here dat is the collection name


// Hash the password before saving to database
userSchema.pre('save', async function (next) {
    const user = this;
    if (!user.isModified('password')) return next();
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
    next();
  });

// Check if the entered password matches the stored password
userSchema.methods.checkPassword = async function (password) {
    return await bcrypt.compare(password, this.password);
  };

const User = mongoose.model("userdata",userSchema);

module.exports=User;