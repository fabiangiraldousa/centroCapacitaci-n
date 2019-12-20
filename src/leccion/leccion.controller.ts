import { Controller } from '@nestjs/common';
import { Leccion } from './leccion.entity';
import { Crud } from '@nestjsx/crud';
import { LeccionService } from './leccion.service';

@Crud({
    model: {
      type: Leccion,
    },
})
@Controller('leccion')
export class LeccionController {
    constructor(public service: LeccionService){}
}
