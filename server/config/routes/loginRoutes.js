import express from "express";

import { getActivity } from "../../middleware/reports.js";
import { validateLogin } from "../../middleware/validateLogin.js";
import { loginController } from "../../src/api/v1/controllers/loginController.js";
import { changeController } from "../../src/api/v1/controllers/loginController.js";

const router = express.Router();

router.post('/login', validateLogin, getActivity, loginController)
router.post('/change-password', getActivity, changeController)

export default router;