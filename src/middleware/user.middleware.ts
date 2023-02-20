import { NextFunction, Request, Response } from 'express';
import { userRepository } from '../repository';
import { ErrorHandler } from '../error';
import { userValidator } from '../validator';

class UserMiddleware {
    public async checkIsUserExist(req:Request, res:Response, next:NextFunction):Promise<void> {
        const { email } = req.body;
        try {
            const candidate = await userRepository.getUserByEmail(email);
            if (candidate) {
                next(new ErrorHandler(`користувач з поштою ${email} вже існує`, 400));
                return;
            }
            next();
        } catch (err:any) {
            next(err);
        }
    }

    public validationCreatingUser(req:Request, res:Response, next:NextFunction) {
        try {
            const { error, value } = userValidator.registration.validate(req.body);
            if (error) {
                next(new ErrorHandler(`${error.details[0].message}`, 400));
                return;
            }
            req.body = value;
            next();
        } catch (err:any) {
            next(err);
        }
    }
}

export const userMiddleware = new UserMiddleware();
