import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { readFileSync } from 'fs';
import { resolve } from 'path';

async function bootstrap() {
  const httpsOptions = {
    key: readFileSync(resolve(__dirname, 'cert', 'cert.key')),
    cert: readFileSync(resolve(__dirname, 'cert', 'cert.crt')),
  };

  const app = await NestFactory.create(AppModule, { httpsOptions });

  app.enableCors({
    origin: 'http://localhost:5173',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  });

  await app.listen(3000);
}
bootstrap();
