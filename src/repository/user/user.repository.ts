import { AppDataSource } from '../../data-source';
import { UserEntity } from '../../entity';
import { IUser } from '../../interface';

const repository = AppDataSource.getRepository(UserEntity);

class UserRepository {
    public async createUser(user:IUser): Promise<IUser> {
        return repository.save(user);
    }

    public async getUserByEmail(email:string): Promise<UserEntity | null> {
        return repository.findOne({ where: { email } });
    }
}

export const userRepository = new UserRepository();
