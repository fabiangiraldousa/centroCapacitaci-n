import { Test, TestingModule } from '@nestjs/testing';
import { ComentarioController } from './comentario.controller';

describe('Comentario Controller', () => {
  let controller: ComentarioController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ComentarioController],
    }).compile();

    controller = module.get<ComentarioController>(ComentarioController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
