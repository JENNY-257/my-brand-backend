import {Router} from "express"
// import session from "express-session"
import { createBlog, getAllBlogs, getSingleBlog, deleteBlog, updateBlog } from "../controllers/blog.js"
// import cloudinary from "../utils/cloudinary.js"
import upload from "../utils/multer.js"
import validate from "../middlewares/validate.js"
import blogValidationSchema from "../validations/blogValidate.js"
// import { isLoggedIn } from "../middlewares/isLogedin.js"
const router = Router()

// create blog

router.post("",upload.single("image"),validate( blogValidationSchema),createBlog)

//read all blogs
router.get("",getAllBlogs)

//read single blog
router.get("/:id",getSingleBlog)

//delete single blog
router.delete("/:id",deleteBlog)

//update blog
router.put("/:id",upload.single("image"),updateBlog)
// get all messages
export default router