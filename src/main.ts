import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { useContainer } from 'class-validator';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true, //Adicionando transformção
      whitelist: true, //ignorar todas as propriedade que vem no 
      forbidNonWhitelisted: true, //lança um erro se não tiver no nosso DTO
    })
  )
  //Falando para o Nest para resolver as dependencias class-validator, 
  //e se não resolver do jeito que o nest resolve ele tenta mais uma vez calss-validator resolver do jeito dele
  useContainer(app.select(AppModule), {fallbackOnErrors: true});

  await app.listen(3000);
}
bootstrap();
