import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateInscripcionDto } from './dto/create-inscripcion.dto';

@Injectable()
export class InscripcionesService {
  constructor(private prisma: PrismaService) {}

  async create(dto: CreateInscripcionDto) {
    const evento = await this.prisma.evento.findUnique({
      where: { id: dto.eventoId },
    });
    if (!evento) throw new NotFoundException(`Evento #${dto.eventoId} no existe`);
    return this.prisma.inscripcion.create({ data: dto });
  }

  findAll() {
    return this.prisma.inscripcion.findMany({ include: { evento: true } });
  }

  findByEvento(eventId: number) {
    return this.prisma.inscripcion.findMany({
      where: { eventoId: eventId },
      include: { evento: true },
    });
  }

  findByParticipante(name: string) {
    return this.prisma.inscripcion.findMany({
      where: { participante: { contains: name, mode: 'insensitive' } },
      include: { evento: true },
    });
  }

  async remove(id: number) {
    const ins = await this.prisma.inscripcion.findUnique({ where: { id } });
    if (!ins) throw new NotFoundException(`Inscripción #${id} no encontrada`);
    return this.prisma.inscripcion.delete({ where: { id } });
  }
}