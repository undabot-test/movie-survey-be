require('dotenv').config();
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';

async function start() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT);
  console.log(`Application is running on: ${await app.getUrl()}`);
}
start();
