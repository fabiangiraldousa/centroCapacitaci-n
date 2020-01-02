import { Test, TestingModule } from '@nestjs/testing';
import { RecursoService } from './recurso.service';

describe('RecursoService', () => {
  let service: RecursoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RecursoService],
    }).compile();

    service = module.get<RecursoService>(RecursoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
