import { Module } from '@nestjs/common';
import { ControlService } from './control.service';
import { ControlController } from './control.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Control } from './entities/control.entity';
import { SignoVital } from 'src/signo_vital/entities/signo_vital.entity';
import { Paciente } from 'src/paciente/entities/paciente.entity';

@Module({
  controllers: [ControlController],
  imports: [
    TypeOrmModule.forFeature([Control, SignoVital, Paciente]),
  ],
  providers: [ControlService],
})
export class ControlModule {}
