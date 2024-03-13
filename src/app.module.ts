import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    // 
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.development.env',
    }),
    TypeOrmModule.forRoot({
      type: 'mssql',
      host: process.env.DB_HOST_URI,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      // entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true, //use this with development enviroment
    })],

})
export class AppModule { }
