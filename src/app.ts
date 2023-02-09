import 'reflect-metadata';
import express from 'express';

import { apiConfig } from './config';
import { AppDataSource } from './data-source';
import { apiRouter } from './router/api.router';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(apiRouter);

AppDataSource.initialize()
    .then(() => {
        console.log('DataBase Connected Successfully');
        app.listen(apiConfig.PORT, async () => {
            console.log(`Server started on PORT: ${apiConfig.PORT}`);
        });
    }).catch((error) => console.log('Error Connecting DataBase', error));
