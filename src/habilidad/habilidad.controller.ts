import { Controller } from '@nestjs/common';
import { Habilidad } from './habilidad.entity';
import { HabilidadService } from './habilidad.service';
import { Crud } from '@nestjsx/crud';

@Crud({
    model: {
      type: Habilidad,
    },
  })
@Controller('habilidad')
export class HabilidadController {
    constructor(public service:HabilidadService){
        
    }
}
