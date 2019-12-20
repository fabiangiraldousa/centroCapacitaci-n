import { Controller } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { Documentacion } from './documentacion.entity';
import { DocumentacionService } from './documentacion.service';

@Crud({
    model: {
      type: Documentacion,
    },
})

@Controller('documentacion')
export class DocumentacionController {
    constructor(public service: DocumentacionService) {}
}
