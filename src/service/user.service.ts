import bcrypt from 'bcrypt';
import { IUser } from '../interface';
import { userRepository } from '../repository';

class UserService {
    public async createUser(user: IUser): Promise<IUser> {
        const { email, password } = user;

        const candidate = await userRepository.getUserByEmail(email);
        if (candidate) {
            throw new Error(`polzovatel c adresom ${email} uje est`);
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const userToSave = { ...user, password: hashedPassword };

        const createdUser = await userRepository.createUser(userToSave);
        return createdUser;
    }
}

export const userService = new UserService();
