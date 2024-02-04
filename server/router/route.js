import { Router } from "express";
const router = Router();

// controller imports
import * as controller from '../controllers/appController.js'
import { registerMail } from "../controllers/mailer.js";

import Auth, { localVariables } from "../middleware/auth.js";

// post
router.post('/register', controller.register)

router.post('/registerMail', registerMail)

router.post('/authenticate', (req, res) => res.end());

router.post('/login', controller.verifyUser, controller.login)

// get
router.get('/user/:username', controller.getUser)

router.get('/generateOTP', controller.verifyUser, localVariables, controller.generateOTP)

router.get('/verifyOTP', controller.verifyOTP)

router.get('/createResetSession', controller.createResetSession)

// put
router.put('/updateuser', Auth, controller.updateUser)

router.put('/resetPassword', controller.verifyUser, controller.resetPassword)

export default router;