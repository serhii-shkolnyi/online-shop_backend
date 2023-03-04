import bcrypt from 'bcrypt';
import { v4 as uuidV4 } from 'uuid';

import { ITokenData, IUser } from '../interface';
import { userRepository } from '../repository';
import { tokenService } from './token.service';

class UserService {
    public async createUser(user: IUser): Promise<ITokenData> {
        const { password } = user;
        const activationLink = uuidV4();
        const hashedPassword = await bcrypt.hash(password, 10);
        const userToSave = { ...user, password: hashedPassword, activationLink };

        const createdUser = await userRepository.createUser(userToSave);
        return this._getTokenData(createdUser);
    }

    private async _getTokenData(userData: IUser): Promise<ITokenData> {
        const { id, email } = userData;
        const { refreshToken, accessToken } = await tokenService
            .generateTokenPair({ userId: id, userEmail: email });
        await tokenService.saveToken(id, refreshToken, accessToken);

        return {
            refreshToken,
            accessToken,
            userId: id,
            userEmail: email,
        };
    }
}

export const userService = new UserService();
