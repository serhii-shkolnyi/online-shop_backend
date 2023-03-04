import jwt from 'jsonwebtoken';

import { ITokenDataToSave, ITokenPair, IUserPayload } from '../interface';
import { apiConfig } from '../config';
import { tokenRepository } from '../repository';

class TokenService {
    public generateTokenPair(payload: IUserPayload): ITokenPair {
        const accessToken = jwt.sign(payload, apiConfig.JWT_ACCESS_SECRET_KEY as string, { expiresIn: '30m' });
        const refreshToken = jwt.sign(payload, apiConfig.JWT_REFRESH_SECRET_KEY as string, { expiresIn: '7d' });

        return {
            accessToken,
            refreshToken,
        };
    }

    public async saveToken(userId: number, accessToken: string, refreshToken: string):
        Promise <ITokenDataToSave> {
        const tokenFromDb = await tokenRepository.findTokenByUserId(userId);

        if (tokenFromDb) {
            tokenFromDb.accessToken = accessToken;
            tokenFromDb.refreshToken = refreshToken;
            return tokenRepository.saveToken(tokenFromDb);
        }

        return tokenRepository.saveToken({ userId, accessToken, refreshToken });
    }
}

export const tokenService = new TokenService();
