import {
    Column,
    CreateDateColumn,
    DeleteDateColumn,
    Entity,
    PrimaryGeneratedColumn,
} from 'typeorm';

import { ITokenDataToSave } from '../interface';

@Entity('Token', { database: 'online_shop' })
export class TokenEntity implements ITokenDataToSave {
    @PrimaryGeneratedColumn()
        id: number;

    @Column({
        type: 'int',
    })
        userId: number;

    @Column({
        type: 'varchar',
        width: 255,
        nullable: false,
    })
        accessToken: string;

    @Column({
        type: 'varchar',
        width: 255,
        nullable: false,
    })
        refreshToken: string;

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
