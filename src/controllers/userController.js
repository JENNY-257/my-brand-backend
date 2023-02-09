import { userSchema } from "../models/User.js";
const postSignupValues = async (req, res) => {
    const checkUser = await userSchema.findOne({ email: req.body.email });
  
    
    //   if (checkUser.email === req.body.email) {
    //     if (checkUser.password === req.body.password) {
    //       return res.status(400).json({ error: "You already have an account. Please login!" });
    //   } 
    //       return res.status(400).json({ error: "Email already taken. Please use another email." }) 
    //   }
    
  
    const signupValue = new userSchema({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
      
    });
  
    await signupValue.save();
    res.send(signupValue);
  };
  export {postSignupValues}