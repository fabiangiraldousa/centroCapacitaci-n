import { Controller } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { Curso } from './curso.entity';
import { CursoService } from './curso.service';

@Crud({
  model: {
    type: Curso,
  },
})
@Controller('curso')
export class CursoController {
  constructor(public service: CursoService) {}
}