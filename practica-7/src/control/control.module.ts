import { Module } from '@nestjs/common';
import { ControlService } from './control.service';
import { ControlResolver } from './control.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Control } from './entities/control.entity';
import { Paciente } from 'src/paciente/entities/paciente.entity';
import { SignoVital } from 'src/signo-vital/entities/signo-vital.entity';

@Module({
  providers: [ControlResolver, ControlService],
  imports: [TypeOrmModule.forFeature([Control, Paciente, SignoVital])],
  exports: [TypeOrmModule]
})
export class ControlModule {}
