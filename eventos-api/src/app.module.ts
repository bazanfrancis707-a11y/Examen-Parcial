import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { EventosModule } from './eventos/eventos.module';
import { InscripcionesModule } from './inscripciones/inscripciones.module';

@Module({
  imports: [PrismaModule, EventosModule, InscripcionesModule],
})
export class AppModule {}