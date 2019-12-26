import { Test, TestingModule } from '@nestjs/testing';
import { ModuloService } from './modulo.service';

describe('ModuloService', () => {
  let service: ModuloService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ModuloService],
    }).compile();

    service = module.get<ModuloService>(ModuloService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
