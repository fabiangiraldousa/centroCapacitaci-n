import { Test, TestingModule } from '@nestjs/testing';
import { DocumentacionService } from './documentacion.service';

describe('DocumentacionService', () => {
  let service: DocumentacionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DocumentacionService],
    }).compile();

    service = module.get<DocumentacionService>(DocumentacionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
