import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SyngeneReportsModule } from './syngene-reports/syngene-reports.module';
import { DatabaseModule } from './database/database.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.development.env',
    }),
    DatabaseModule,
    AuthModule,
    SyngeneReportsModule,
    // TypeOrmModule.forRoot({
    //   type: 'mssql',
    //   host: process.env.DB_HOST_URI,
    //   port: +process.env.DB_PORT,
    //   username: process.env.DB_USERNAME,
    //   password: process.env.DB_PASSWORD,
    //   database: process.env.DB_NAME,
    //   // autoLoadEntities:true,
    //   synchronize: true, //use this with development enviroment
    //   options:{trustServerCertificate:true}
      
    // }),
  ],

})
export class AppModule { }
