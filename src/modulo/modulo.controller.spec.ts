import { Test, TestingModule } from '@nestjs/testing';
import { ModuloController } from './modulo.controller';

describe('Modulo Controller', () => {
  let controller: ModuloController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ModuloController],
    }).compile();

    controller = module.get<ModuloController>(ModuloController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
