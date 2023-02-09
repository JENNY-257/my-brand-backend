import Joi from 'joi';

const blogValidationSchema = Joi.object({
  title: Joi.string().min(3).required(),
  content: Joi.string().min(10).required(),
});
export default blogValidationSchema