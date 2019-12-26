import { Test, TestingModule } from '@nestjs/testing';
import { DocumentacionController } from './documentacion.controller';

describe('Documentacion Controller', () => {
  let controller: DocumentacionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DocumentacionController],
    }).compile();

    controller = module.get<DocumentacionController>(DocumentacionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
