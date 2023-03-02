import bcrypt from 'bcrypt';
import { v4 as uuidV4 } from 'uuid';

import { IUser } from '../interface';
import { userRepository } from '../repository';

class UserService {
    public async createUser(user: IUser): Promise<IUser> {
        const { password } = user;
        const activationLink = uuidV4();
        const hashedPassword = await bcrypt.hash(password, 10);
        const userToSave = { ...user, password: hashedPassword, activationLink };

        const createdUser = await userRepository.createUser(userToSave);
        return createdUser;
    }
}

export const userService = new UserService();
