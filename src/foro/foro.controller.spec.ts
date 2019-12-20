import { Test, TestingModule } from '@nestjs/testing';
import { ForoController } from './foro.controller';

describe('Foro Controller', () => {
  let controller: ForoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ForoController],
    }).compile();

    controller = module.get<ForoController>(ForoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
