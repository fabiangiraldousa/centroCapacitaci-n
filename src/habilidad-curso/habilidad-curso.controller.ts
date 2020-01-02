import { Controller } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { HabilidadCurso } from './habilida-curso.entity';
import { HabilidadCursoService } from './habilidad-curso.service';

@Crud({
    model: {
      type: HabilidadCurso,
    },
  })
@Controller('habilidad-curso')
export class HabilidadCursoController {
    constructor(public service:HabilidadCursoService){
        
    }
}
