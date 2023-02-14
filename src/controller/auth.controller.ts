import { Request, Response } from 'express';

import { IUser } from '../interface';
import { authService } from '../service';

class AuthController {
    public async createUser(req:Request, res:Response): Promise<Response<IUser>> {
        const createdUser = await authService.createUser(req.body);
        return res.json(createdUser);
    }
}

export const authController = new AuthController();
