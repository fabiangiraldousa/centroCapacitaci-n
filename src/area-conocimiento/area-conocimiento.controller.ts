import { Controller } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { AreaConocimiento } from './area-conocimiento.entity';
import { AreaConocimientoService } from './area-conocimiento.service';

@Crud({
    model: {
      type: AreaConocimiento,
    },
  })
@Controller('area-conocimiento')
export class AreaConocimientoController {
    constructor(public service:AreaConocimientoService){

    }
}
