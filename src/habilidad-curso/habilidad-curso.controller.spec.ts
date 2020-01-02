import { Test, TestingModule } from '@nestjs/testing';
import { HabilidadCursoController } from './habilidad-curso.controller';

describe('HabilidadCurso Controller', () => {
  let controller: HabilidadCursoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HabilidadCursoController],
    }).compile();

    controller = module.get<HabilidadCursoController>(HabilidadCursoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
