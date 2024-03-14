import { Sequelize } from 'sequelize-typescript';
import { UserReport_EntryExit } from 'src/syngene-reports/entity/syngene-entery-exist-user-report.entity';

/**
 * SEQUELIZE variable is stored in a file named
 * 'constants' so it can be easily reused anywhere
 * without being subject to human error.
 */

export const databaseProviders = [
    {
        provide: 'SEQUELIZE',
        useFactory: async () => {
            const sequelize = new Sequelize({

                dialect: 'mssql',
                host: process.env.DB_HOST_URI,
                port: +process.env.DB_PORT,
                username: process.env.DB_USERNAME,
                password: process.env.DB_PASSWORD,
                database: process.env.DB_NAME,
                // autoLoadEntities:true,
                // synchronize: true, //use this with development enviroment
                // options: { trustServerCertificate: true }
            });

            /**
             * Add Models Here
             * ===============
             * You can add the models to
             * Sequelize later on.
             */
            sequelize.addModels([UserReport_EntryExit]);
            await sequelize.sync();
            // await sequelize.sync();
            return sequelize;
        },
    },
];