import { Controller } from '@nestjs/common';
import { Foro } from './foro.entity';
import { Crud } from '@nestjsx/crud';
import { ForoService } from './foro.service';

@Crud({
    model: {
      type: Foro,
    },
})
@Controller('foro')
export class ForoController {
    constructor(public service:ForoService){}
}
