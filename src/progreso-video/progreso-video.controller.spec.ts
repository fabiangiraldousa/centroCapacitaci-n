import { Test, TestingModule } from '@nestjs/testing';
import { ProgresoVideoController } from './progreso-video.controller';

describe('ProgresoVideo Controller', () => {
  let controller: ProgresoVideoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProgresoVideoController],
    }).compile();

    controller = module.get<ProgresoVideoController>(ProgresoVideoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
