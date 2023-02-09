import { Router } from 'express';

import { authController } from '../controller/auth.controller';

const router = Router();

router.post('/registration', authController.createUser);

export const authRouter = router;
