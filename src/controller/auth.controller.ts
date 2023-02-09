import { Request, Response } from 'express';

import { UserEntity } from '../entity';
import { AppDataSource } from '../data-source';

class AuthController {
    public async createUser(req:Request, res:Response) {
        const user = await AppDataSource.getRepository(UserEntity).save(req.body);
        res.json(user);
    }
}

export const authController = new AuthController();
