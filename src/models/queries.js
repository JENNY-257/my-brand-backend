import mongoose from "mongoose";

const mesagesSchema = new mongoose. Schema(
  {
    name:String,
    email: String,
    message:String
    
  },
  
);

export default  mongoose.model("messages",  mesagesSchema);
