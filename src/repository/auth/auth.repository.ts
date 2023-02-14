import { IUser } from '../../interface';
import { AppDataSource } from '../../data-source';
import { UserEntity } from '../../entity';

const repository = AppDataSource.getRepository(UserEntity);
class AuthRepository {
    public async createdUser(user:IUser): Promise<IUser> {
        return repository.save(user);
    }
}

export const authRepository = new AuthRepository();
