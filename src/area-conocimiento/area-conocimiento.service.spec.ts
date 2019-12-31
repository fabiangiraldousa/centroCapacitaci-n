import { Test, TestingModule } from '@nestjs/testing';
import { AreaConocimientoService } from './area-conocimiento.service';

describe('AreaConocimientoService', () => {
  let service: AreaConocimientoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AreaConocimientoService],
    }).compile();

    service = module.get<AreaConocimientoService>(AreaConocimientoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
