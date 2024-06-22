import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PacienteService } from './paciente.service';
import { CreatePacienteDto } from './dto/create-paciente.dto';
import { UpdatePacienteDto } from './dto/update-paciente.dto';

@Controller('paciente')
export class PacienteController {
  constructor(private readonly pacienteService: PacienteService) {}

  @Post()
  create(@Body() createpacienteDto: CreatePacienteDto) {
    return this.pacienteService.create(createpacienteDto);
  }

  @Get()
  findAll() {
    return this.pacienteService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.pacienteService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() UpdatePacienteDto: UpdatePacienteDto) {
    return this.pacienteService.update(id, UpdatePacienteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.pacienteService.remove(+id);
  }
}
