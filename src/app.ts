import 'reflect-metadata';
import express, { NextFunction, Request, Response } from 'express';

import { apiConfig } from './config';
import { AppDataSource } from './data-source';
import { apiRouter } from './router/api.router';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(apiRouter);

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
    res
        .status(err.status || 500)
        .json({
            message: err.message,
            data: err.data,
        });
});

AppDataSource.initialize()
    .then(() => {
        console.log('DataBase Connected Successfully');
        app.listen(apiConfig.PORT, async () => {
            console.log(`Server started on PORT: ${apiConfig.PORT}`);
        });
    }).catch((error) => console.log('Error Connecting DataBase', error));
