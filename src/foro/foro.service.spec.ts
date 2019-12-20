import { Test, TestingModule } from '@nestjs/testing';
import { ForoService } from './foro.service';

describe('ForoService', () => {
  let service: ForoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ForoService],
    }).compile();

    service = module.get<ForoService>(ForoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
