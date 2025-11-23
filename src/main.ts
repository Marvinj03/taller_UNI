import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  app.enableCors();

  const config = new DocumentBuilder()
    .setTitle('API de Productos por Marvin Josué Pérez Vanegas') // Título Personalizado
    .setDescription('Backend de demostración de CI/CD (Taller UNI), desarrollado y desplegado por Marvin Josué Pérez Vanegas. Proporciona la gestión completa (CRUD) de productos.') // Descripción Personalizada
    .setVersion('1.0')
    .addTag('productos', 'Operaciones CRUD para la entidad Producto') 
    .build();
  
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();

