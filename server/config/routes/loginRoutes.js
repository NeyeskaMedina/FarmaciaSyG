import express from "express";

import { getActivity } from "../../middleware/reports.js";
import { validateLogin } from "../../middleware/validateLogin.js";
import { loginController } from "../../src/api/v1/controllers/loginController.js";


const router = express.Router();

router.post('/login', validateLogin, getActivity, loginController)

export default router;