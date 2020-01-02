import { Controller } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { Recurso } from './recurso.entity';
import { RecursoService } from './recurso.service';

@Crud({
    model: {
      type: Recurso,
    },
})
@Controller('recurso')
export class RecursoController {
    constructor(public service:RecursoService){
        
    }
}
