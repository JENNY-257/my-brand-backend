import mongoose  from "mongoose"
import blogs from "../models/Blog.js"
import  cloudinary  from "../utils/cloudinary.js"
//create a blog
const createBlog = async(req,res) =>{
    try {
        const result = await cloudinary.uploader.upload(req.file.path);
        const newBlog = await blogs.create({
            title : req.body.title,
            content:req.body.content,
            image : result.secure_url
        })
        const blogCreated =await newBlog.save()
        res.status(201).json(blogCreated)
    } catch (error) {
        res.status(404).json(error)
    }
}

//read all blogs
const getAllBlogs = async (req,res)=>{
    try {
        const blog = await blogs.find({}).sort({createdAt :-1})
        res.status(201).json(blog)
    } catch (error) {
        res.status(404).json(error)
    }
}

//get a single blog

const getSingleBlog = async (req,res)=>{
    const {id} = req.params 
    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error :"there is no such blog"})
    }
    const blog1 = await blogs.findById(id);
    if( !blog1){
        return res.status(404).json({error: "there is no such blog"})
    }
    res.status(201).json(blog1)
}
//delete single blog 
const deleteBlog = async(req,res)=>{
    try {
        const {id} = req.params
        if(!mongoose.Types.ObjectId.isValid(id)){
            res.status(404).json({error:"there is no such blog"})
        }
        const blog = await blogs.findOneAndDelete({_id:id});
        res.status(201).json(blog)
    } catch (error) {
        console.log(error);
    }
}
const updateBlog = async (req,res)=>{
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid){
        res.status(404).json({error:"there is no such blog"})
    }
    const result = await cloudinary.uploader.upload(req.file.path);
    const updateB = await blogs.findOneAndUpdate({_id :id },{
      title : req.body.title,
      content:req.body.content,
      image : result.secure_url
        
    })
    if(!updateB){
        res.status(404).json({error:"there is no such blog"})
    }
    res.status(201).json(updateB)
}

export {
    createBlog,
    getAllBlogs,
    getSingleBlog,
    deleteBlog,
    updateBlog
}