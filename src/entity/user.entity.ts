import {
    Column,
    CreateDateColumn,
    DeleteDateColumn,
    Entity,
    PrimaryGeneratedColumn,
} from 'typeorm';

import { IUser } from '../interface';

@Entity('User', { database: 'online_shop' })
export class UserEntity implements IUser {
    @PrimaryGeneratedColumn()
        id: number;

    @Column({
        type: 'varchar',
        width: 255,
        nullable: false,
        default: 'customer',
    })
        role: string;

    @Column({
        type: 'boolean',
        default: false,
    })
        activated: boolean;

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

    @Column({
        type: 'varchar',
        width: 255,
        nullable: false,
    })
        activationLink: string;

    @Column({
        nullable: false,
        default: Date.now(),
    })
    @CreateDateColumn({
        type: 'timestamp',
    })
        createdAt: string;

    @Column()
    @DeleteDateColumn({
        type: 'timestamp',
    })
        deletedAt: string;
}
