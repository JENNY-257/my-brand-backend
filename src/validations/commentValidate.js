import Joi from "joi";

const commentOfSchema = Joi.object({
  name: Joi.string().min(5).max(200).required(),
  message: Joi.string().min(20).max(1000).required(),
});

export default commentOfSchema;