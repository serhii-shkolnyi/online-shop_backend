import bcrypt from 'bcrypt';

import { IUser } from '../interface';
import { authRepository } from '../repository/auth';

class AuthService {
    public async createUser(user: IUser):Promise<IUser> {
        const { password } = user;

        const hashedPassword = await this._hashPassword(password);
        const userToSave = { ...user, password: hashedPassword };
        const createdUser = await authRepository.createdUser(userToSave);
        return createdUser;
    }

    private async _hashPassword(password:string): Promise<string> {
        return bcrypt.hash(password, 5);
    }
}

export const authService = new AuthService();
