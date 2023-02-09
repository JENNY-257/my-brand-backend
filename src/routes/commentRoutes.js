import { Router } from "express";
import { addComment, removeComment} from "../controllers/commentCont.js";
import validate from "../middlewares/validate.js";
import commentOfSchema from "../validations/commentValidate.js";

const router = Router();

// router.get("/", getComment);

router.post("/:id/comments",  validate(commentOfSchema),addComment);

router.delete("/:id", removeComment);

export default router;