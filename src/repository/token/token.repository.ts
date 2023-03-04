import { AppDataSource } from '../../data-source';
import { TokenEntity } from '../../entity';
import { ITokenDataToSave } from '../../interface';

const repository = AppDataSource.getRepository(TokenEntity);

class TokenRepository {
    public async saveToken(data: ITokenDataToSave): Promise<ITokenDataToSave> {
        return repository.save(data);
    }

    public async findTokenByUserId(userId: number): Promise<ITokenDataToSave | null> {
        return repository.findOne({ where: { userId } });
    }
}

export const tokenRepository = new TokenRepository();
