import { Module } from '@nestjs/common';
import { PacienteService } from './paciente.service';
import { PacienteResolver } from './paciente.resolver';

@Module({
  providers: [PacienteResolver, PacienteService],
})
export class PacienteModule {}
