import { Request, Response } from 'express';

import { IUser } from '../interface';
import { userService } from '../service';

class AuthController {
    public async registration(req:Request, res:Response): Promise<Response<IUser>> {
        const createdUser = await userService.createUser(req.body);
        return res.json(createdUser);
    }
}

export const authController = new AuthController();
