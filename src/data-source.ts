import { DataSource } from 'typeorm';

import { apiConfig } from './config';

export const AppDataSource = new DataSource({
    type: 'postgres',
    host: apiConfig.DATABASE_HOST,
    port: apiConfig.DATABASE_PORT,
    username: apiConfig.DATABASE_USERNAME,
    password: apiConfig.DATABASE_PASSWORD,
    database: apiConfig.DATABASE_NAME,
    synchronize: true,
    logging: false,
    entities: ['./src/entity/**/*.ts'],
    subscribers: [],
    migrations: ['./src/migration/**/*.ts'],
});
