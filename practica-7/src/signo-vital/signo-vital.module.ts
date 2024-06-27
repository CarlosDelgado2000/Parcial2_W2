import { Module } from '@nestjs/common';
import { SignoVitalService } from './signo-vital.service';
import { SignoVitalResolver } from './signo-vital.resolver';

@Module({
  providers: [SignoVitalResolver, SignoVitalService],
})
export class SignoVitalModule {}
