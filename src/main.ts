import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {

  const app = await NestFactory.create(AppModule);

  /*============= Implementing Swagger For API Documentation START ==================*/
  const config = new DocumentBuilder()
    .setTitle('Syngene Dashboard App Documentation')
    .setDescription('The Syengene API description')
    .setVersion('1.0.0')
    .addTag('Syengene')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('SyengeneApi', app, document);
  /*============= Implementing Swagger For API Documentation END ==================*/

  await app.listen(process.env.SERVER_PORT);

}
bootstrap();
