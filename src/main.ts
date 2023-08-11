import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger'
import * as bodyParser from 'body-parser'

async function bootstrap() {
  const configService = new ConfigService();

  const app = await NestFactory.create(AppModule);
  app.use(bodyParser.json({ limit: '10mb' }));
	app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));

  // const environment = configService.get('NODE_ENV');
	// const isProduction = environment === 'production';

  const options = new DocumentBuilder()
    .setTitle('Insurance Trak Anvil API')
    .setDescription('Insurance Trak Anvil API')
    .setVersion('1.0')
    .build()

  const document = SwaggerModule.createDocument(app, options)

  SwaggerModule.setup('api', app, document)
  await app.listen(3000);
}
bootstrap();
