
import { Router } from "express";
const userRouter= Router()
import { postSignupValues } from "../controllers/userController.js";

userRouter.post("/",postSignupValues)
export default userRouter