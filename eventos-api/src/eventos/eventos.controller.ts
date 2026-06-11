import {
  Controller, Get, Post, Body,
  Param, Put, Delete, ParseIntPipe,
} from '@nestjs/common';
import { EventosService } from './eventos.service';
import { CreateEventoDto } from './dto/create-evento.dto';
import { UpdateEventoDto } from './dto/update-evento.dto';

@Controller('events')
export class EventosController {
  constructor(private readonly eventosService: EventosService) {}

  @Post()
  async create(@Body() dto: CreateEventoDto) {
    return await this.eventosService.create(dto);
  }

  @Get()
  async findAll() {
    return await this.eventosService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return await this.eventosService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id', ParseIntPipe) id: number, @Body() dto: UpdateEventoDto) {
    return await this.eventosService.update(id, dto);
  }

  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number) {
    return await this.eventosService.remove(id);
  }
}