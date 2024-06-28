import { Module } from '@nestjs/common';
import { SignoVitalService } from './signo-vital.service';
import { SignoVitalResolver } from './signo-vital.resolver';
import {  TypeOrmModule } from '@nestjs/typeorm';
import { SignoVital } from './entities/signo-vital.entity';

@Module({
  providers: [SignoVitalResolver, SignoVitalService],
  imports: [  TypeOrmModule.forFeature([SignoVital])],
  exports: [TypeOrmModule]
})
export class SignoVitalModule {}
