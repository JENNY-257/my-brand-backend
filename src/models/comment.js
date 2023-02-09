import { Schema, model,mongoose } from "mongoose";

const schemaComment =  Schema(
  {
    name: String,
    message:String,

    blog: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Blog",
    },
  }
  
)
export default mongoose.model("Comments", schemaComment);


