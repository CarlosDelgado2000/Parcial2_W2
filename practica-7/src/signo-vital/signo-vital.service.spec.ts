import { Test, TestingModule } from '@nestjs/testing';
import { SignoVitalService } from './signo-vital.service';

describe('SignoVitalService', () => {
  let service: SignoVitalService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SignoVitalService],
    }).compile();

    service = module.get<SignoVitalService>(SignoVitalService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
