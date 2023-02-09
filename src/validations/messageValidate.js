import Joi from 'joi';
const messagesValidationSchema = Joi.object({
    name: Joi.string().min(3).required(),
    email: Joi.string().email().required(),
    message: Joi.string().min(4).required(),
  });
  export default messagesValidationSchema