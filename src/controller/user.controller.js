const express=require("express");

const router=express.Router();


const User=require("../model/user.schema");

const jwt=require("jsonwebtoken");
const verifyToken = require("../middleware/authenticate");

require("dotenv").config();


// const generateToken=(user)=>{
//     return token = jwt.sign({user},process.env.JSON_WEB_TOKEN);
// }

router.post("/register",async(req,res)=>{
   
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: 'Email and password are required' });
    }
    try {
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(409).json({ message: 'User already exists' });
      }
      const user = new User({ email, password });
      await user.save();
      res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }


})
router.post("/login",async(req,res)=>{
    const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required' });
  }
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }
    const passwordMatch = await user.checkPassword(password);
    if (!passwordMatch) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }
    // Generate a JWT token with user ID as payload
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET_KEY);
    res.status(200).json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
})
router.get('/protected', verifyToken, (req, res) => {
    res.status(200).json({ message: 'Protected route' });
});
module.exports=router;