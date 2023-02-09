import { Column, Entity } from 'typeorm';

import { CommonFieldsEntity } from './commonFields.entity';
import { IUser } from '../interface';

@Entity('User', { database: 'online_shop' })
export class UserEntity extends CommonFieldsEntity implements IUser {
    @Column({
        type: 'varchar',
        width: 255,
        nullable: false,
        default: 'customer',
    })
        role: string;

    @Column({
        type: 'varchar',
        width: 255,
        nullable: false,
        unique: true,
    })
        email: string;

    @Column({
        type: 'varchar',
        width: 255,
        nullable: false,
    })
        password: string;
}
