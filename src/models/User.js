
import { Schema, model } from "mongoose"
  
  const schema = Schema({
    username:String,
    email:String,
    password :String,
         
  })

  export const userSchema= model("users",schema)
