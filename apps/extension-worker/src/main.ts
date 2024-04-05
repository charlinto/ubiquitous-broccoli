import { NestFactory } from '@nestjs/core';
import { ExtensionWorkerModule } from './extension-worker/extension-worker.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(ExtensionWorkerModule);
  const config = new DocumentBuilder()
    .setTitle('Extension Worker Doc')
    .setDescription('')
    .setVersion('1.0')
    .addTag('')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(process.env.WORKER_PORT || 3000);
  const logger: Logger = new Logger('Extension Worker Logic', {
    timestamp: true,
  });
  logger.log('app running on ' + process.env.WORKER_PORT);
}
bootstrap();
