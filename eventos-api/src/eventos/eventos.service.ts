import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateEventoDto } from './dto/create-evento.dto';
import { UpdateEventoDto } from './dto/update-evento.dto';

@Injectable()
export class EventosService {
  constructor(private prisma: PrismaService) {}

 async create(dto: CreateEventoDto) {
  return await this.prisma.evento.create({
    data: { ...dto, fechaEvento: new Date(dto.fechaEvento) },
  });
}

  findAll() {
    return this.prisma.evento.findMany({ include: { inscripciones: true } });
  }

  async findOne(id: number) {
    const evento = await this.prisma.evento.findUnique({
      where: { id },
      include: { inscripciones: true },
    });
    if (!evento) throw new NotFoundException(`Evento #${id} no encontrado`);
    return evento;
  }
  async update(id: number, dto: UpdateEventoDto) {
    await this.findOne(id);
    return this.prisma.evento.update({
      where: { id },
      data: {
        ...dto,
        fechaEvento: dto.fechaEvento ? new Date(dto.fechaEvento) : undefined,
      },
    });
  }
  async remove(id: number) {
    await this.findOne(id);
    return this.prisma.evento.delete({ where: { id } });
  }
}