import { NestFactory } from '@nestjs/market';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  console.log("The app is listening on port: 3000")
  await app.listen(3000);
}
bootstrap();
