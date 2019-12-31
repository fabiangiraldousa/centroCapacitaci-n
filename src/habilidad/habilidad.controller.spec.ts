import { Test, TestingModule } from '@nestjs/testing';
import { HabilidadController } from './habilidad.controller';

describe('Habilidad Controller', () => {
  let controller: HabilidadController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HabilidadController],
    }).compile();

    controller = module.get<HabilidadController>(HabilidadController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
