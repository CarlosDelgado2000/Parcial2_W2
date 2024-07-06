import { Module } from '@nestjs/common';
import { ControlService } from './control.service';
import { ControlGateway } from './control.gateway';

@Module({
  providers: [ControlGateway, ControlService],
})
export class ControlModule {}
