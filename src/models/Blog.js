import mongoose from "mongoose";

const blogSchema = new mongoose.Schema(
  {
    title: String,
    content:String,
    image:String
  
  }
  
);

export default mongoose.model("Blogs", blogSchema);
