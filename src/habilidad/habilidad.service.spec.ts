import { Test, TestingModule } from '@nestjs/testing';
import { HabilidadService } from './habilidad.service';

describe('HabilidadService', () => {
  let service: HabilidadService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HabilidadService],
    }).compile();

    service = module.get<HabilidadService>(HabilidadService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
