import { Test, TestingModule } from '@nestjs/testing';
import { ProgresoVideoService } from './progreso-video.service';

describe('ProgresoVideoService', () => {
  let service: ProgresoVideoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProgresoVideoService],
    }).compile();

    service = module.get<ProgresoVideoService>(ProgresoVideoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
