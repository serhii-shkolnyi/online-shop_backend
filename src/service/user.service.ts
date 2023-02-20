import bcrypt from 'bcrypt';
import { IUser } from '../interface';
import { userRepository } from '../repository';

class UserService {
    public async createUser(user: IUser): Promise<IUser> {
        const { password } = user;

        const hashedPassword = await bcrypt.hash(password, 10);
        const userToSave = { ...user, password: hashedPassword };

        const createdUser = await userRepository.createUser(userToSave);
        return createdUser;
    }
}

export const userService = new UserService();
