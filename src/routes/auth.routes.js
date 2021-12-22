import { Router } from "express";
const router = new Router();

import * as authController from '../controllers/auth.cotroller'



router.post('/login', authController.login);
router.get('/miPerfil', authController.miPerfil);

export default router;