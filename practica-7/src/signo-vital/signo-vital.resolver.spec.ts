import { Test, TestingModule } from '@nestjs/testing';
import { SignoVitalResolver } from './signo-vital.resolver';
import { SignoVitalService } from './signo-vital.service';

describe('SignoVitalResolver', () => {
  let resolver: SignoVitalResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SignoVitalResolver, SignoVitalService],
    }).compile();

    resolver = module.get<SignoVitalResolver>(SignoVitalResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
