import { NestFactory } from '@nestjs/core';
import { ReservvationsModule } from './reservvations.module';

async function bootstrap() {
  const app = await NestFactory.create(ReservvationsModule);
  await app.listen(3000);
}
bootstrap();
