import { Module } from '@nestjs/common';
import { SignoVitalService } from './signo_vital.service';
import { SignoVitalController } from './signo_vital.controller';
import { SignoVital } from './entities/signo_vital.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [ TypeOrmModule.forFeature([SignoVital]) ],
  controllers: [SignoVitalController],
  providers: [SignoVitalService],
})
export class SignoVitalModule {}
