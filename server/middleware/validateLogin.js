import Joi from "joi";
import { user, password } from "../src/api/v1/helpers/validations.js";

const categorySchema = Joi.object({
    user,
    password
});

const validateLogin = (req, res, next) => {
    const { error } = categorySchema.validate(req.body);

    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }

    next();
};

export { validateLogin };
