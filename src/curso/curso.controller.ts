import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
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

  @Get('detail/:id')
  getModulosCurso(@Param('id',ParseIntPipe) id:number){
    return this.service.getMetadataCurso(id);
  }
}