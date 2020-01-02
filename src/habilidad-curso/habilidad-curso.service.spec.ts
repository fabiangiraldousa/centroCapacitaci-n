import { Test, TestingModule } from '@nestjs/testing';
import { HabilidadCursoService } from './habilidad-curso.service';

describe('HabilidadCursoService', () => {
  let service: HabilidadCursoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HabilidadCursoService],
    }).compile();

    service = module.get<HabilidadCursoService>(HabilidadCursoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
