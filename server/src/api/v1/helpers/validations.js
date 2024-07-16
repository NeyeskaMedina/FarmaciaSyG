import Joi from "joi";

//USER
export const user = Joi.string().max(100).required();
export const password = Joi.string().max(10).required();