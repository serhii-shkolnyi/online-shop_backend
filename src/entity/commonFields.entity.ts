import {
    Column, CreateDateColumn, DeleteDateColumn, PrimaryGeneratedColumn,
} from 'typeorm';

import { ICommonFields } from '../interface';

export class CommonFieldsEntity implements ICommonFields {
    @PrimaryGeneratedColumn()
        id: number;

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
