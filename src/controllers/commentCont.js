import Comments from "../models/comment.js";
import Blog from "../models/Blog.js";

export const addComment = async (req, res) => {
    const blog = await Blog.findOne({ _id: req.params.id });

    const comment = new Comments({
      name: req.body.name,
      message: req.body.message,
      blog:blog

     
    });
    await comment.save();
    res.status(201).send({ message: "comment submitted successfully", comment });
  };
  
  export const removeComment = async (req, res) => {
    try {
      await Comments.deleteOne({ _id: req.params.id });
      res.status(204).send({ message: "comment deleted successfully" });
    } catch {
      res.status(404).send({ error: "comment doesn't exist!" });
    }
  };