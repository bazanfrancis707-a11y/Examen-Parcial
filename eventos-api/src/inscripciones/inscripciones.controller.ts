import {
  Controller, Get, Post, Body,
  Param, Delete, ParseIntPipe,
} from '@nestjs/common';
import { InscripcionesService } from './inscripciones.service';
import { CreateInscripcionDto } from './dto/create-inscripcion.dto';

@Controller('registrations')
export class InscripcionesController {
  constructor(private readonly inscripcionesService: InscripcionesService) {}

  @Post()
  async create(@Body() dto: CreateInscripcionDto) {
    return await this.inscripcionesService.create(dto);
  }

  @Get()
  async findAll() {
    return await this.inscripcionesService.findAll();
  }

  @Get('event/:eventId')
  async findByEvento(@Param('eventId', ParseIntPipe) eventId: number) {
    return await this.inscripcionesService.findByEvento(eventId);
  }

  @Get('participant/:name')
  async findByParticipante(@Param('name') name: string) {
    return await this.inscripcionesService.findByParticipante(name);
  }

  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number) {
    return await this.inscripcionesService.remove(id);
  }
}