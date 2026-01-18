import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);


  app.useGlobalPipes(new ValidationPipe({
    stopAtFirstError: true, // השורה הזו גורמת לו לעצור אחרי השגיאה הראשונה
  }));

  await app.listen(3000);
}
bootstrap();
