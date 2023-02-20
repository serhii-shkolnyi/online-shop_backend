import { Router } from 'express';

import { authController } from '../controller';
import { userMiddleware } from '../middleware';

const router = Router();

router.post(
    '/registration',
    userMiddleware.validationCreatingUser,
    userMiddleware.checkIsUserExist,
    authController.registration,
);

export const authRouter = router;
